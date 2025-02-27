"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Disclosure } from "@headlessui/react";

const FoireAuxQuestions = () => {
  return (
    <section className="relative py-1 bg-cover bg-center bg-white overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="relative rounded-2xl py-24 bg-faqBg bg-no-repeat bg-cover bg-primary">
          <p className="text-lg font-normal text-white text-center mb-6">FAQ</p>
          <h2 className="text-4xl font-semibold text-center text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Questions fréquemment posées.
          </h2>
          <div className="w-full px-4 pt-16">
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-none">
  <span className="text-black">Quels services de marketing proposez-vous ?</span>
  <div
    className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <Icon icon="lucide:chevron-up" width="20" height="20" />
  </div>
</Disclosure.Button>
<Disclosure.Panel className="text-16 text-black/50 font-normal text-left pt-4 mt-6 border-t border-border">
  Notre agence de marketing en France propose une gamme complète de services pour répondre à vos besoins. Nous offrons des stratégies de marketing digital, la gestion des réseaux sociaux, le référencement (SEO), la création de contenu, et bien plus encore. Nous travaillons avec vous pour développer des campagnes sur mesure qui maximisent votre visibilité et votre engagement en ligne.
</Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-none">
                      <span className="text-black">Comment mesurez-vous les résultats de vos campagnes ?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-base text-black/50 pt-4 mt-6 text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        Nous utilisons des outils d'analyse avancés pour suivre et mesurer les performances de chaque 
                        campagne. Nos rapports mensuels détaillés incluent des métriques clés comme le taux de conversion, 
                        le retour sur investissement, l'engagement, le trafic web et la génération de leads. Nous adaptons 
                        continuellement nos stratégies en fonction des données obtenues pour optimiser vos résultats.
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-none">
                      <span className="text-black">Comment débute une collaboration avec votre agence ?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-base text-black/50 pt-4 mt-6 font-normal text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        Notre collaboration commence par une consultation initiale gratuite où nous 
                        analysons vos besoins, objectifs et le positionnement actuel de votre marque. 
                        Ensuite, nous développons une proposition stratégique personnalisée avec un plan d'action 
                        détaillé et un calendrier de mise en œuvre. Une fois le plan approuvé, notre équipe 
                        se met au travail pour transformer votre vision marketing en résultats concrets.
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoireAuxQuestions;