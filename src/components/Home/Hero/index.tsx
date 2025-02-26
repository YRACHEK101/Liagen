"use client";
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
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12 justify-center items-center gap-8">
          <div className="col-span-12 md:col-span-5">
            <motion.div
              className="py-2 px-5 bg-primary/15 rounded-full w-fit"
              initial={leftAnimation.initial}
              animate={leftAnimation.animate}
              exit={leftAnimation.exit}
              transition={leftAnimation.transition}
            >
              <p className="text-primary text-lg font-bold">AGENCE DE MARKETING</p>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-8xl font-bold mt-4"
              initial={leftAnimation.initial}
              animate={leftAnimation.animate}
              exit={leftAnimation.exit}
              transition={leftAnimation.transition}
            >
              Stratégies créatives pour votre succès.
            </motion.h1>
            <motion.button
              className="bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-primary mt-8"
              initial={leftAnimation.initial}
              animate={leftAnimation.animate}
              exit={leftAnimation.exit}
              transition={leftAnimation.transition}
            >
              Contactez-nous
            </motion.button>
          </div>
          <div className="col-span-12 md:col-span-7">
            <motion.div
              initial={rightAnimation.initial}
              animate={rightAnimation.animate}
              exit={rightAnimation.exit}
              transition={rightAnimation.transition}
            >
              <Image
                src="/images/hero/banner-image.png"
                alt="image marketing"
                width={600}
                height={600}
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;