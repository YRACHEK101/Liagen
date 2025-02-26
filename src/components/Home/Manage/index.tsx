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
  const [selectedCategory, setSelectedCategory] = useState<"yearly" | "monthly">("yearly");

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
    <section id="services-section" className="py-8 md:py-0">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <h3 className="text-center text-3xl sm:text-4xl md:text-6xl font-black my-6 md:my-12 text-black">
          Stratégie marketing digitale complète pour votre entreprise
        </h3>

        {/* Keep this section exactly as in the original for desktop */}
        

        <div className="mt-8 md:mt-6 relative">
          <div className="hidden md:block dance-text -ml-80 text-center -rotate-[10deg] mb-5">économisez 20% sur l'année</div>
          <div className="md:hidden text-center text-sm font-medium text-primary mb-4">économisez 20% sur l'année</div>
          <Image 
            src="/images/manage/toggle.svg" 
            alt="image-bascule" 
            width={24} 
            height={24} 
            className="hidden md:block absolute left-[37%] top-8" 
          />
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-0">
            <h3 className="text-sm md:text-14 font-medium md:mr-5 text-black">Engagement annuel</h3>
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
            <h3 className="text-sm md:text-14 font-medium md:ml-5 text-black">Mensuel sans engagement</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-16 gap-8 md:gap-14 manage">
          {filteredData.map((items, i) => (
            <div className="shadow-manage-shadow border border-border text-center p-6 md:p-10 rounded md:rounded-none" key={i}>
              <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-black">{items.heading}</h4>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-3 text-black">{items.price}€</h2>
              <p className="text-xs md:text-14 font-medium text-darkgrey mb-4 md:mb-6 text-black">{items.user}</p>

              <button className="w-full md:w-auto text-xs md:text-14 font-bold text-primary bg-transparent hover:bg-primary hover:text-white border-2 border-primary rounded-full py-3 md:py-4 px-6 md:px-12 mb-4 md:mb-6">
                Demander un rendez-vous
              </button>
              
              <div className="space-y-2 md:space-y-0">
                {Object.entries(items.features).map(([key, value]) => (
                  <h3 className="text-xs md:text-sm font-medium text-darkgrey md:mb-3 text-black" key={key}>
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