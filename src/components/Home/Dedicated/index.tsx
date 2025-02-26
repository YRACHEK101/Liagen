"use client";
import React from "react";
import Image from "next/image";

const Dedie = () => {
  return (
    <section className="relative bg-cover bg-center bg-white overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <Image
            src="/images/dedicated/spiral.svg"
            height={272}
            width={686}
            alt="design-en-spirale"
            className="absolute left-0 top-0 hidden lg:block -z-10"
          />
          {/* Colonne Gauche */}
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/images/dedicated/man.svg"
              alt="portrait-directeur"
              width={416}
              height={530}
              className="mx-auto md:mx-0"
            />
          </div>

          {/* Colonne Droite */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <Image
                src="/images/dedicated/comma.svg"
                alt="image-guillemet"
                width={200}
                height={106}
                className="absolute -top-16 -left-32 hidden lg:block"
              />
            </div>
            <p className="text-6xl font-bold sm:leading-tight text-center -mr-1 lg:text-start text-black">
              « Passionnés par la création de stratégies marketing qui génèrent des résultats. »
            </p>
            <p className="font-medium text-black/55 text-2xl mt-5 text-center lg:text-start -ml-1">
              Notre mission est de transformer votre vision en une stratégie marketing efficace qui 
              captive votre audience et stimule la croissance de votre entreprise.
            </p>
            <p className="text-2xl font-semibold mt-12 lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-black before:h-0.5 before:w-24 before:left-0 before:bottom-1/2 text-center lg:text-start">
              Thomas Moreau, Directeur Général
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dedie;