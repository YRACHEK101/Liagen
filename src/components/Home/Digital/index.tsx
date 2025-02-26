"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Numerique = () => {
  return (
    <section className="relative bg-cover bg-center bg-white overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top pb-60 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLONNE-1 */}
          <div className="pt-24 lg:pl-24">
            <h3 className="text-18 font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5">
              Qui nous sommes
            </h3>
            <h4 className="text-65 sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">
              Nous sommes une agence marketing qui transforme votre vision en succès mesurable.
            </h4>
            <div className="text-center lg:text-start">
              <Link
                href="#"
                className="text-xl font-semibold text-white bg-blue hover:bg-primary py-4 px-12 rounded-full"
              >
                Nos solutions
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 -right-20 lg:-bottom-32 lg:-right-40">
          <Image
            src="/images/digital/girldoodle.svg"
            alt="illustration-marketing"
            width={815}
            height={691}
            className="w-full max-w-xs lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Numerique;