"use client";

import Image from "next/image";
import { FadeIn, LiquidEther } from "@/components/bits";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-border overflow-hidden">
      <LiquidEther 
        className="w-full h-full bg-background"
        style={{ minHeight: '200px' }}
        colors={['#F97316', '#FF8534', '#E85D04']}
        autoDemo={true}
        autoSpeed={0.3}
        autoIntensity={1.5}
        mouseForce={15}
        cursorSize={80}
        resolution={0.4}
      >
        <FadeIn delay={0.2}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              {/* Logo */}
              <Image
                src="/images/logo-white.svg"
                alt="Playbook"
                width={186}
                height={40}
                className="h-8 w-auto"
              />
              
              {/* Copyright */}
              <p className="text-xs text-muted-foreground">
                © {currentYear} Playbook. All rights reserved.
              </p>
            </div>
          </div>
        </FadeIn>
      </LiquidEther>

      {/* Subtle gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10" />
    </footer>
  );
}

