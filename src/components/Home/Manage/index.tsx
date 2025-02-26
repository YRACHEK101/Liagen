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
    <section id="services-section">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-center text-6xl font-black mx-24 text-black">
          Stratégie marketing digitale complète pour votre entreprise
        </h3>

        <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src="/images/manage/right.svg" alt="icone-avantage" width={21} height={14} />
            <h4 className="text-18 font-semibold">Audit marketing gratuit</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src="/images/manage/right.svg" alt="icone-avantage" width={21} height={14} />
            <h4 className="text-18 font-semibold">Stratégie personnalisée</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src="/images/manage/right.svg" alt="icone-avantage" width={21} height={14} />
            <h4 className="text-18 font-semibold">Engagement de résultats</h4>
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="dance-text -ml-80 text-center -rotate-[10deg] mb-5">économisez 20% sur l'année</div>
          <Image src="/images/manage/toggle.svg" alt="image-bascule" width={24} height={24} className="absolute left-[37%] top-8" />
          <div className="flex justify-center">
            <h3 className="text-14 font-medium mr-5">Engagement annuel</h3>
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
            <h3 className="text-14 font-medium ml-5">Mensuel sans engagement</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-14 manage">
          {filteredData.map((items, i) => (
            <div className="shadow-manage-shadow border border-border text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <h2 className="text-6xl font-extrabold mb-3">{items.price}€</h2>
              <p className="text-14 font-medium text-darkgrey mb-6">{items.user}</p>

              <button className="text-14 font-bold text-primary bg-transparent hover:bg-primary hover:text-white border-2 border-primary rounded-full py-4 px-12 mb-6">
                Demander un rendez-vous
              </button>
              {/* Affichage dynamique des caractéristiques */}
              {Object.entries(items.features).map(([key, value]) => (
                <h3 className="text-sm font-medium text-darkgrey mb-3" key={key}>
                  {value}
                </h3>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gestion;