"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative py-16 md:py-16 overflow-hidden z-1 bg-white">
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left content area */}
          <div className="w-full md:w-1/2 text-left">
            <motion.div
              className="py-1 px-2 bg-blue-100 rounded-full w-fit"
              initial={leftAnimation.initial}
              animate={leftAnimation.animate}
              exit={leftAnimation.exit}
              transition={leftAnimation.transition}
            >
              <p className="text-blue-600 text-sm md:text-base font-bold">AGENCE DE MARKETING</p>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-black leading-tight"
              initial={leftAnimation.initial}
              animate={leftAnimation.animate}
              exit={leftAnimation.exit}
              transition={leftAnimation.transition}
            >
              Stratégies<br />
              créatives pour<br />
              votre succès.
            </motion.h1>
            
            <motion.button
              className="bg-blue-600 text-white text-lg font-medium py-3 md:py-4 px-8 md:px-10 rounded-full hover:bg-blue-700 transition-colors duration-300 mt-8"
              initial={leftAnimation.initial}
              animate={leftAnimation.animate}
              exit={leftAnimation.exit}
              transition={leftAnimation.transition}
            >
              Contactez-nous
            </motion.button>
          </div>
          
          {/* Right image area */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={rightAnimation.initial}
              animate={rightAnimation.animate}
              exit={rightAnimation.exit}
              transition={rightAnimation.transition}
              className="relative"
            >
              <div className="rounded-3xl bg-blue-50 overflow-hidden">
                <Image
                  src="/images/hero/banner-image.png"
                  alt="Professional at desk with laptop"
                  width={650}
                  height={550}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;