"use client";

import { notFound } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import * as React from "react";
import { Swiper as SwiperType } from "swiper";

// === TYPES ===
interface ProjetInformatique {
  slug: string;
  title: string;
  description: string;
  slides: string[];
  github?: string;
  content?: string;
  image?: string;
}

interface AutreProjet {
  slug: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  content?: string;
}

// === DONNÉES ===
const projetsInformatiques: ProjetInformatique[] = [
  {
    slug: "App-bus",
    title: "Application de gestion de réseau de bus",
    description:
      "Application de gestion et de consultation du réseau Imag'in de Calais. Elle permet de visualiser les lignes et arrêts, consulter les horaires de passage, et calculer le meilleur itinéraire entre deux arrêts selon une plage horaire donnée.",
    slides: [
      "/images/AppBus/1.jpg",
      "/images/AppBus/2.jpg",
      "/images/AppBus/3.jpg",
      "/images/AppBus/4.jpg",
      "/images/AppBus/5.jpg",
      "/images/AppBus/6.jpg",
      "/images/AppBus/7.jpg",
      "/images/AppBus/8.jpg",
      "/images/AppBus/9.jpg",
      "/images/AppBus/10.jpg",
      "/images/AppBus/11.jpg",
      "/images/AppBus/12.jpg",
      "/images/AppBus/13.jpg",
      "/images/AppBus/14.jpg",
      "/images/AppBus/15.jpg",
      "/images/AppBus/16.jpg",
      "/images/AppBus/17.jpg",
      "/images/AppBus/18.jpg",
    ],
    github: "https://github.com/Mathys-V/SAE_E4",
    content:
      "Projet réalisé en équipe de 6 avec : Erwan CHRIST, Ethan FERREIRA BAUDIN, Lukas TOULELLE, Mathieu LECOINTRE, Sovanmony Y.",
  },
  {
    slug: "Calculateur-Checksum",
    title: "Calculateur de Header Checksum",
    description:
      "Application C# WinForms permettant de calculer le Header Checksum d'un paquet IP. L'utilisateur saisit les valeurs de l'en-tête IP, et le programme effectue automatiquement le calcul du checksum selon la norme IPv4, avec une interface simple et pédagogique.",
    slides: [
      "/images/CalcChecksum/1.jpg",
      "/images/CalcChecksum/2.jpg",
      "/images/CalcChecksum/3.jpg",
      "/images/CalcChecksum/4.jpg",
      "/images/CalcChecksum/5.jpg",
      "/images/CalcChecksum/6.jpg",
      "/images/CalcChecksum/7.jpg",
      "/images/CalcChecksum/8.jpg",
    ],
    github: "https://github.com/erwan-cht/SAE-R2-05-GE4",
    content:
      "Projet réalisé en équipe de 6 avec : Erwan CHRIST, Ethan FERREIRA BAUDIN, Lukas TOULELLE, Mathieu LECOINTRE, Sovanmony Y.",
    image: "/images/CalcChecksum/poster.jpg",
  },
];

const autresProjets: AutreProjet[] = [
  {
    slug: "Infographie-Cookies-Sessions",
    title: "Infographie : Comprendre les Cookies et les Sessions",
    description:
      "Infographie pédagogique expliquant de manière simple et visuelle le fonctionnement des cookies et des sessions sur le web, leur rôle dans la gestion de la connexion utilisateur et la persistance des données.",
    image: "/images/InfographieCookies/infographie.jpg",
    content: "Projet réalisé en binôme avec Erwan CHRIST",
  },
  {
    slug: "Ecolumis-Innovation",
    title: "Ecolumis – Innovation et communication",
    description:
      "Conception d'une innovation originale et création de supports de communication variés (emailing, affiche, flyer, réseaux sociaux), accompagnée d'une maquette de site web.",
    images: [
      "/images/Ecolumis/1.jpg",
      "/images/Ecolumis/2.jpg",
      "/images/Ecolumis/3.jpg",
      "/images/Ecolumis/4.jpg",
      "/images/Ecolumis/5.jpg",
      "/images/Ecolumis/6.jpg",
      "/images/Ecolumis/7.jpg",
      "/images/Ecolumis/8.jpg",
      "/images/Ecolumis/charte-graphique.jpg",
    ],
    content: "Projet réalisé en groupe de 4",
  },
];

// === COMPOSANT ===
interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: Props) {
  const { slug } = React.use(params);
  const swiperRef = React.useRef<SwiperType | null>(null);

  // Cherche le projet dans les deux listes
  const projet =
    projetsInformatiques.find((p) => p.slug === slug) ||
    autresProjets.find((p) => p.slug === slug);

  if (!projet) return notFound();

  const isInfo = (
    p: ProjetInformatique | AutreProjet
  ): p is ProjetInformatique => "slides" in p;

  return (
    <section className="max-w-3xl mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">
        {projet.title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {projet.description}
      </p>

      {/* Swiper pour projets informatiques */}
      {isInfo(projet) && projet.slides && (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          observer={true}
          observeParents={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={() => {
            setTimeout(() => swiperRef.current?.update(), 100);
          }}
          className="mb-6 rounded-lg shadow-md"
        >
          {projet.slides.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`${projet.title} Slide ${index + 1}`}
                width={800}
                height={450}
                className="rounded-lg shadow-md w-full h-auto"
                onLoad={() => swiperRef.current?.update()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Swiper pour autres projets */}
      {!isInfo(projet) && projet.images && (
        <>
          <h2 className="text-2xl font-semibold mb-3 dark:text-gray-100">
            Galerie
          </h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            observer={true}
            observeParents={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={() => {
              setTimeout(() => swiperRef.current?.update(), 100);
            }}
            className="mb-8 rounded-lg shadow-md"
          >
            {projet.images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  alt={`${projet.title} Image ${index + 1}`}
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md w-full h-auto"
                  onLoad={() => swiperRef.current?.update()}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}

      {/* Image unique pour projets sans images multiples */}
      {projet.image && !(!isInfo(projet) && projet.images) && (
        <>
          <h2 className="text-2xl font-semibold mb-2 dark:text-gray-100">
            {projet.title}
          </h2>
          <Image
            src={projet.image}
            alt={`${projet.title} Poster`}
            width={800}
            height={450}
            className="rounded-lg shadow-md w-full mb-6"
          />
        </>
      )}

      {/* Contenu additionnel */}
      {projet.content && (
        <p className="mb-6 dark:text-gray-300">
          {projet.content.split(/(Lukas TOULELLE)/g).map((part, i) =>
            part === "Lukas TOULELLE" ? (
              <a
                key={i}
                href="https://www.linkedin.com/in/lukas-toulelle-7672522a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Lukas TOULELLE
              </a>
            ) : (
              part
            )
          )}
        </p>
      )}

      {/* Lien GitHub si présent */}
      {isInfo(projet) && projet.github && (
        <a
          href={projet.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Voir sur GitHub
        </a>
      )}
    </section>
  );
}
