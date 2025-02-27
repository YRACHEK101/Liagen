"use client";
import React from "react";
import Link from "next/link";

const RejoignezNous = () => {
  return (
    <section className="overflow-hidden bg-joinus">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest uppercase">
            Contactez-nous
          </h3>
          <h2 className="text-4xl font-bold my-6 text-black">
  Transformez votre visibilité marketing dès aujourd'hui.
</h2>
          <p className="text-black/50 text-base font-normal">
            Notre agence de marketing digital vous accompagne dans l'élaboration de 
            stratégies sur mesure. Expertise en référencement, publicité en ligne et 
            médias sociaux pour développer votre présence numérique.
          </p>
        </div>

        <div className="mx-auto max-w-4xl pt-5">
          <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full">
            <div className="w-full sm:w-auto">
              <input
                type="name"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-transparent pl-1 focus:outline-none bg-emailbg focus:text-black"
                placeholder="Votre nom"
                autoComplete="off"
              />
            </div>
            <div className="w-full sm:w-auto">
              <input
                type="email"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-none bg-emailbg focus:text-black"
                placeholder="Votre email professionnel"
                autoComplete="off"
              />
            </div>
            <div className="sm:mr-3">
              <Link
                href="#"
                className="w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-5 px-12 hover:bg-primary duration-300"
              >
                Demandez un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RejoignezNous;