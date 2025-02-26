"use client";
import React from "react";
import Link from "next/link";

const NosValeurs = () => {
  return (
    <section className="bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* COLONNE-1 */}
          <div className="bg-purple pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase">
              Nos Valeurs
            </h2>
            <h3 className="text-6xl sm:text-65xl font-bold text-white mb-5 text-center sm:text-start">
              Créativité{" "}
              <span className="text-white/60">
                et innovation sont nos moteurs.
              </span>
            </h3>
            <h5 className="text-white/75 pt-2 mb-16 text-center sm:text-start">
              Nous croyons que le succès de votre marque passe par une vision stratégique 
              et des solutions marketing innovantes adaptées à vos objectifs commerciaux.
            </h5>
            <div className="text-center sm:text-start">
              <Link
                href="#"
                className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode"
              >
                Découvrir
              </Link>
            </div>
          </div>

          {/* COLONNE-2 */}
          <div className="">
            <div className="pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[#D6FFEB] bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <h2 className="text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase">
                STRATÉGIE
              </h2>
              <h3 className="text-6xl sm:text-65xl font-bold text-black mb-5 text-center sm:text-start">
                <span className="text-primary">Propulser</span> votre marque vers de nouveaux sommets.
              </h3>
              <h5 className="pt-2 mb-16 text-center sm:text-start text-black/75 text-lg">
                Notre équipe d'experts vous accompagne pour développer une stratégie marketing 
                sur mesure qui convertit votre audience en clients fidèles.
              </h5>
              <div className="text-center sm:text-start">
                <Link
                  href="#"
                  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode"
                >
                  Nos services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosValeurs;