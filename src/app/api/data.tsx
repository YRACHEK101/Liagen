import { Icon } from "@iconify/react/dist/iconify.js";

export const ProductType: { id: number; section: string; link: string[]; }[] = [
  {
    id: 1,
    section: "Menu",
    link: ['Accueil', 'Services', 'À propos', 'Contact'],
  },
  {
    id: 2,
    section: "Services",
    link: ['SEO', 'Réseaux Sociaux', 'Marketing de Contenu', 'Se Connecter']
  },
  {
    id: 3,
    section: "Pages",
    link: ['404', 'FAQ', 'Politique de Confidentialité']
  },
  {
    id: 4,
    section: "Autres",
    link: ['Blog', 'Carrières']
  }
];

export const Aboutdata: { heading: string; imgSrc: string; paragraph: string; link: string; }[] = [
  {
    heading: "À propos de notre agence de marketing",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "Notre agence spécialise dans la création et la mise en œuvre de stratégies de marketing intégrales adaptées aux besoins de votre entreprise.",
    link: "En savoir plus",
  },
  {
    heading: "Nos Services",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "Nous offrons une gamme complète de services, y compris le SEO, la gestion des réseaux sociaux, la création de contenu, et plus encore.",
    link: "En savoir plus",
  },
  {
    heading: "Nos Clients",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "Nous avons travaillé avec de nombreux clients dans divers secteurs pour les aider à atteindre leurs objectifs de marketing.",
    link: "En savoir plus",
  },
];

export const DataType: { profession: string; name: string; imgSrc: string; }[] = [
  {
    profession: "Directeur Marketing",
    name: "Jane Smith",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    profession: "Spécialiste SEO",
    name: "John Doe",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    profession: "Gestionnaire des Réseaux Sociaux",
    name: "Emily Johnson",
    imgSrc: "/images/wework/avatar4.svg",
  },
  {
    profession: "Créateur de Contenu",
    name: "Michael Brown",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    profession: "Analyste Marketing",
    name: "Sarah Lee",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    profession: "Designer Graphique",
    name: "David Kim",
    imgSrc: "/images/wework/avatar4.svg",
  },
];

export const postData: { heading: string; imgSrc: string; }[] = [
  {
    heading: "Stratégies SEO pour les petites entreprises",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "Le pouvoir du marketing des réseaux sociaux",
    imgSrc: "/images/featured/feat2.jpg",
  },
  {
    heading: "Marketing de contenu : un guide complet",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "Comment mesurer le ROI du marketing",
    imgSrc: "/images/featured/feat2.jpg",
  },
];

export const Testimonials: { profession: string; comment: string; imgSrc: string; name: string; rating: number }[] = [
  {
    name: "Robert Fox",
    profession: "Responsable Marketing, XYZ Corp",
    comment:
      "Les stratégies de marketing fournies par cette agence ont considérablement amélioré notre présence en ligne et notre engagement client.",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 5,
  },
  {
    name: "Leslie Alexander",
    profession: "PDG, ABC Inc",
    comment:
      "Leur expertise en SEO et marketing de contenu nous a aidés à obtenir de meilleurs classements dans les moteurs de recherche et à augmenter le trafic.",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 4,
  },
  {
    name: "Cody Fisher",
    profession: "Gestionnaire des Réseaux Sociaux, DEF Ltd",
    comment:
      "Les campagnes de réseaux sociaux gérées par cette agence ont été très efficaces pour construire notre marque et engager notre public.",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 4,
  },
  {
    name: "Robert Fox",
    profession: "Responsable Marketing, XYZ Corp",
    comment:
      "Les stratégies de marketing fournies par cette agence ont considérablement amélioré notre présence en ligne et notre engagement client.",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 4,
  },
  {
    name: "Leslie Alexander",
    profession: "PDG, ABC Inc",
    comment:
      "Leur expertise en SEO et marketing de contenu nous a aidés à obtenir de meilleurs classements dans les moteurs de recherche et à augmenter le trafic.",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 4,
  },
  {
    name: "Cody Fisher",
    profession: "Gestionnaire des Réseaux Sociaux, DEF Ltd",
    comment:
      "Les campagnes de réseaux sociaux gérées par cette agence ont été très efficaces pour construire notre marque et engager notre public.",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 4,
  },
];

export const Article: { time: string; heading: string; heading2: string; date: string; imgSrc: string; name: string; }[] = [
  {
    time: "5 min",
    heading: "Meilleures pratiques SEO",
    heading2: "pour 2023",
    name: "Publié sur MarketingPro",
    date: "19 août 2021",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "5 min",
    heading: "L'avenir du",
    heading2: "Marketing des réseaux sociaux",
    name: "Publié sur MarketingPro",
    date: "19 août 2021",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 min",
    heading: "Marketing de contenu",
    heading2: "Stratégies",
    name: "Publié sur MarketingPro",
    date: "19 août 2021",
    imgSrc: "/images/articles/article3.png",
  },
  {
    time: "5 min",
    heading: "Meilleures pratiques SEO",
    heading2: "pour 2023",
    name: "Publié sur MarketingPro",
    date: "19 août 2021",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "5 min",
    heading: "L'avenir du",
    heading2: "Marketing des réseaux sociaux",
    name: "Publié sur MarketingPro",
    date: "19 août 2021",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 min",
    heading: "Marketing de contenu",
    heading2: "Stratégies",
    name: "Publié sur MarketingPro",
    date: "19 août 2021",
    imgSrc: "/images/articles/article3.png",
  },
];