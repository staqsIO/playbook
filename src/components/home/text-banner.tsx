"use client";

import { useRef } from "react";
import VariableProximity from "@/components/bits/variable-proximity";

interface TextBannerProps {
  title: string;
  subtitle: string;
}

export function TextBanner({ title, subtitle }: TextBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract plain text for accessibility
  const getPlainText = (html: string) => {
    if (typeof window === 'undefined') return html;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <section className="w-full bg-background py-24 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full text-center">
        {/* Title with Variable Proximity Effect */}
        <div ref={containerRef} className="mb-8">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-tight cursor-default">
            <VariableProximity
              label={getPlainText(title)}
              html={title}
              fromFontVariationSettings="'wght' 700"
              toFontVariationSettings="'wght' 300"
              containerRef={containerRef}
              radius={150}
              falloff="exponential"
              className="font-antonio"
              style={{ fontSize: 'inherit' }}
            />
          </h2>
        </div>

        {/* Subtitle */}
        <div
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      </div>
    </section>
  );
}

