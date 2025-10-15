"use client";

import { forwardRef, useMemo, useRef, useEffect, MutableRefObject, CSSProperties, HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

function useAnimationFrame(callback: () => void) {
  useEffect(() => {
    let frameId: number;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

function useMousePositionRef(containerRef: MutableRefObject<HTMLElement | null>) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev: MouseEvent) => updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

interface VariableProximityProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef: MutableRefObject<HTMLElement | null>;
  radius?: number;
  falloff?: 'linear' | 'exponential' | 'gaussian';
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
  html?: string; // Optional HTML content instead of plain text
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = 'linear',
    className = '',
    onClick,
    style,
    html,
    ...restProps
  } = props;

  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const interpolatedSettingsRef = useRef<string[]>([]);
  const letterWeightRangesRef = useRef<Array<{ from: string; to: string }>>([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  const parseSettingsString = (settingsStr: string) =>
    new Map(
      settingsStr
        .split(',')
        .map(s => s.trim())
        .map(s => {
          const [name, value] = s.split(' ');
          return [name.replace(/['"]/g, ''), parseFloat(value)];
        })
    );

  const parsedSettings = useMemo(() => {
    const fromSettings = parseSettingsString(fromFontVariationSettings);
    const toSettings = parseSettingsString(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  // Detect if we're reducing weight (inverted effect)
  const isInvertedEffect = useMemo(() => {
    const fromSettings = parseSettingsString(fromFontVariationSettings);
    const toSettings = parseSettingsString(toFontVariationSettings);
    const fromWeight = fromSettings.get('wght');
    const toWeight = toSettings.get('wght');
    return fromWeight && toWeight && fromWeight > toWeight;
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const calculateFalloff = (distance: number) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case 'exponential':
        return norm ** 2;
      case 'gaussian':
        return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case 'linear':
      default:
        return norm;
    }
  };

  useAnimationFrame(() => {
    if (!containerRef?.current) return;
    const { x, y } = mousePositionRef.current;
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
      return;
    }
    lastPositionRef.current = { x, y };
    const containerRect = containerRef.current.getBoundingClientRect();

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(
        mousePositionRef.current.x,
        mousePositionRef.current.y,
        letterCenterX,
        letterCenterY
      );

      // Get the weight range for this specific letter
      const letterWeightRange = letterWeightRangesRef.current[index];
      const fromSettings = letterWeightRange ? parseSettingsString(letterWeightRange.from) : parseSettingsString(fromFontVariationSettings);
      const toSettings = letterWeightRange ? parseSettingsString(letterWeightRange.to) : parseSettingsString(toFontVariationSettings);

      if (distance >= radius) {
        letterRef.style.fontVariationSettings = letterWeightRange ? letterWeightRange.from : fromFontVariationSettings;
        return;
      }

      const falloffValue = calculateFalloff(distance);
      const newSettings = Array.from(fromSettings.entries())
        .map(([axis, fromValue]) => {
          const toValue = toSettings.get(axis) ?? fromValue;
          const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
          return `'${axis}' ${interpolatedValue}`;
        })
        .join(', ');

      interpolatedSettingsRef.current[index] = newSettings;
      letterRef.style.fontVariationSettings = newSettings;
    });
  });

  // Parse HTML if provided
  const parseHTML = (htmlString: string) => {
    if (typeof window === 'undefined') return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const nodes: Array<{ 
      text: string; 
      className?: string; 
      style?: CSSProperties;
      fromWeight?: string;
      toWeight?: string;
    }> = [];
    
    // Map Tailwind font weight classes to numerical values
    const getBaseWeightFromClass = (className: string): number => {
      if (className.includes('font-black')) return 900;
      if (className.includes('font-extrabold')) return 800;
      if (className.includes('font-bold')) return 700;
      if (className.includes('font-semibold')) return 600;
      if (className.includes('font-medium')) return 500;
      if (className.includes('font-normal')) return 400;
      if (className.includes('font-light')) return 300;
      if (className.includes('font-extralight')) return 200;
      if (className.includes('font-thin')) return 100;
      return 400; // default to normal
    };
    
    // Calculate weight range based on whether effect is inverted
    const getWeightRange = (baseWeight: number) => {
      if (isInvertedEffect) {
        // For inverted effect: keep base weight, reduce to 100 on hover
        return {
          from: `'wght' ${baseWeight}`,
          to: `'wght' 100`
        };
      } else {
        // Normal effect: enhance by +200, cap at 900
        const enhancedWeight = Math.min(baseWeight + 200, 900);
        return {
          from: `'wght' ${baseWeight}`,
          to: `'wght' ${enhancedWeight}`
        };
      }
    };
    
    const traverse = (node: Node, parentClasses?: string) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        if (text.trim()) {
          let weights = null;
          if (parentClasses) {
            const baseWeight = getBaseWeightFromClass(parentClasses);
            weights = getWeightRange(baseWeight);
          }
          nodes.push({ 
            text,
            className: parentClasses,
            fromWeight: weights?.from,
            toWeight: weights?.to
          });
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const className = element.getAttribute('class') || '';
        
        // Process children with this element's classes
        node.childNodes.forEach(child => traverse(child, className));
      }
    };
    
    doc.body.childNodes.forEach(node => traverse(node));
    return nodes;
  };

  const content = html ? parseHTML(html) : [{ text: label }];
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      onClick={onClick}
      style={{
        display: 'inline',
        ...style
      }}
      className={className}
      {...restProps}
    >
      {content.map((node, nodeIndex) => {
        const words = node.text.split(' ').filter(w => w.length > 0);
        return words.map((word, wordIndex) => {
          const isLastWord = wordIndex === words.length - 1;
          const isLastNode = nodeIndex === content.length - 1;
          const needsSpace = !isLastWord || !isLastNode;
          
          return (
            <span key={`${nodeIndex}-${wordIndex}`}>
              <span className={`inline-block ${node.className || ''}`}>
                {word.split('').map(letter => {
                  const currentLetterIndex = letterIndex++;
                  
                  // Store the weight range for this letter
                  if (node.fromWeight && node.toWeight) {
                    letterWeightRangesRef.current[currentLetterIndex] = {
                      from: node.fromWeight,
                      to: node.toWeight
                    };
                  }
                  
                  return (
                    <motion.span
                      key={currentLetterIndex}
                      ref={el => {
                        letterRefs.current[currentLetterIndex] = el;
                      }}
                      style={{
                        display: 'inline-block',
                        fontVariationSettings: interpolatedSettingsRef.current[currentLetterIndex]
                      }}
                      aria-hidden="true"
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </span>
              {needsSpace && <span className="inline-block">&nbsp;</span>}
            </span>
          );
        });
      })}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = 'VariableProximity';
export default VariableProximity;
