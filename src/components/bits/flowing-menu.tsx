"use client";

import { useRef, useMemo } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface MenuItemData {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: readonly MenuItemData[];
  className?: string;
}

export function FlowingMenu({ items = [], className }: FlowingMenuProps) {
  return (
    <div className={cn("w-full h-full overflow-hidden", className)}>
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

function MenuItem({ link, text, image }: MenuItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);

  const animationDefaults: gsap.TweenVars = { duration: 0.6, ease: "expo" };

  const distMetric = (x: number, y: number, x2: number, y2: number): number => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });

    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });

    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0).to(
      marqueeInnerRef.current,
      { y: edge === "top" ? "101%" : "-101%" },
      0
    );
  };

  const repeatedMarqueeContent = useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <div key={idx} className="flex items-center">
        <span className="font-antonio text-[#060010] whitespace-nowrap uppercase font-normal text-[4vh] leading-[1.2] py-[1vh] px-[1vw]">
          {text}
        </span>
        <div
          className="w-[200px] h-[7vh] my-[2em] mx-[2vw] py-[1em] rounded-[50px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    ));
  }, [text, image]);

  return (
    <div
      ref={itemRef}
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_#fff] py-6"
    >
      <a
        className={cn(
          "flex items-center justify-center h-full relative cursor-pointer",
          "uppercase no-underline whitespace-nowrap font-normal font-antonio",
          "text-white text-[4vh]",
          "hover:text-[#060010] focus:not-focus-visible:text-white"
        )}
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        ref={marqueeRef}
        className="absolute top-0 left-0 overflow-hidden w-full h-full pointer-events-none bg-white"
        style={{
          transform: "translate3d(0, 101%, 0)",
          transition: "transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
        }}
      >
        <div
          ref={marqueeInnerRef}
          className="h-full w-[200%] flex"
          style={{ transform: "translateX(0)" }}
        >
          <div
            className="flex items-center relative h-full w-[200%]"
            style={{
              willChange: "transform",
              animation: "marquee 15s linear infinite",
            }}
          >
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

