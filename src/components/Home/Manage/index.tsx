"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";

// Définition des forfaits pour l'agence de marketing
const plans = [
  {
    heading: "Débutant",
    price: {
      monthly: 39,
      yearly: 390,
    },
    user: "par client",
    features: {
      profiles: "5 Réseaux sociaux gérés",
      posts: "15 Publications mensuelles par réseau",
      templates: "Accès à 200+ templates marketing",
      view: "Rapport de performance mensuel",
      support: "Support par email 5j/7",
    },
  },
  {
    heading: "Professionnel",
    price: {
      monthly: 79,
      yearly: 790,
    },
    user: "par client",
    features: {
      profiles: "10 Réseaux sociaux gérés",
      posts: "30 Publications mensuelles par réseau",
      templates: "Accès à 500+ templates exclusifs",
      view: "Rapports de performance hebdomadaires",
      support: "Support prioritaire 7j/7",
    },
  },
  {
    heading: "Expert",
    price: {
      monthly: 149,
      yearly: 1490,
    },
    user: "par client",
    features: {
      profiles: "Réseaux sociaux illimités",
      posts: "Publications quotidiennes personnalisées",
      templates: "Création de templates sur mesure",
      view: "Tableau de bord analytics en temps réel",
      support: "Conseiller marketing dédié 24/7",
    },
  },
];

const Gestion = () => {
  const [enabled, setEnabled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("yearly");

  const toggleEnabled = () => {
    // Basculement de l'état
    setEnabled((prevEnabled) => !prevEnabled);

    // Mise à jour de la catégorie sélectionnée en fonction de la position du commutateur
    setSelectedCategory((prevCategory) => (prevCategory === "yearly" ? "monthly" : "yearly"));
  };

  const filteredData = plans.map((plan) => ({
    ...plan,
    price: plan.price[selectedCategory], // Utilise la catégorie sélectionnée pour afficher le tarif mensuel ou annuel
  }));

  return (
    <section id="services-section" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <h3 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black my-8 md:my-12 text-black">
          Stratégie marketing digitale complète pour votre entreprise
        </h3>

        {/* Avantages - responsive flex layout */}
        <div className="flex flex-col md:flex-row md:justify-around mt-10 md:mt-20 gap-6 md:gap-0">
          <div className="flex gap-3 md:gap-5 justify-center md:justify-start items-center">
            <Image src="/images/manage/right.svg" alt="icone-avantage" width={21} height={14} className="w-5 h-auto" />
            <h4 className="text-base md:text-lg font-semibold text-black">Audit marketing gratuit</h4>
          </div>
          <div className="flex gap-3 md:gap-5 justify-center md:justify-start items-center">
            <Image src="/images/manage/right.svg" alt="icone-avantage" width={21} height={14} className="w-5 h-auto" />
            <h4 className="text-base md:text-lg font-semibold text-black">Stratégie personnalisée</h4>
          </div>
          <div className="flex gap-3 md:gap-5 justify-center md:justify-start items-center">
            <Image src="/images/manage/right.svg" alt="icone-avantage" width={21} height={14} className="w-5 h-auto" />
            <h4 className="text-base md:text-lg font-semibold text-black">Engagement de résultats</h4>
          </div>
        </div>

        {/* Toggle section - improved positioning */}
        <div className="mt-10 md:mt-16 relative">
          <div className="dance-text text-center -rotate-[10deg] mb-5 hidden md:block md:absolute md:-left-80">économisez 20% sur l'année</div>
          <div className="text-center md:hidden mb-4 text-sm font-bold text-primary">économisez 20% sur l'année</div>
          
          <Image 
            src="/images/manage/toggle.svg" 
            alt="image-bascule" 
            width={24} 
            height={24} 
            className="hidden md:block absolute left-1/3 sm:left-[37%] top-8" 
          />
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0">
            <h3 className="text-sm md:text-base font-medium sm:mr-5 text-black">Engagement annuel</h3>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-black"
            >
              <span className="sr-only">Basculer la période de facturation</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${enabled ? "translate-x-6" : "translate-x-1"}`}
              />
            </Switch>
            <h3 className="text-sm md:text-base font-medium sm:ml-5 text-black">Mensuel sans engagement</h3>
          </div>
        </div>

        {/* Pricing cards - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-16 gap-6 md:gap-8 lg:gap-14 manage">
          {filteredData.map((items, i) => (
            <div 
              className="shadow-manage-shadow border border-border text-center p-6 sm:p-8 md:p-10 rounded-lg transition-transform hover:scale-105" 
              key={i}
            >
              <h4 className="text-xl sm:text-2xl font-bold mb-2 md:mb-3 text-black">{items.heading}</h4>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 md:mb-3 text-black">{items.price}€</h2>
              <p className="text-xs sm:text-sm md:text-base font-medium text-darkgrey mb-4 md:mb-6 text-black">{items.user}</p>

              <button className="w-full sm:w-auto text-sm md:text-base font-bold text-primary bg-transparent hover:bg-primary hover:text-white border-2 border-primary rounded-full py-3 md:py-4 px-8 md:px-12 mb-4 md:mb-6 transition-colors duration-300">
                Demander un rendez-vous
              </button>
              
              {/* Feature list with improved spacing */}
              <div className="space-y-2 md:space-y-3">
                {Object.entries(items.features).map(([key, value]) => (
                  <h3 className="text-xs sm:text-sm font-medium text-darkgrey text-black" key={key}>
                    {value}
                  </h3>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gestion;