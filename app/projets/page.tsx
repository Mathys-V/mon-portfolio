import ProjectCard from "@/components/ProjectCard";

const projetsInformatiques = [
  {
    slug: "App-bus",
    title: "Application de gestion de réseau de bus",
    description:
      "Application WinForms connectée à une base MySQL pour afficher les itinéraires et horaires.",
    image: "/images/diapo1.png",
    github: "https://github.com/Mathys-V/SAE_E4",
  },
  {
    slug: "Calculateur-Checksum",
    title: "Calculateur de Header Checksum",
    description:
      "Application C# WinForms permettant de calculer le Header Checksum d'un paquet IP.",
    image: "/images/CalcChecksum/1.jpg",
    github: "https://github.com/erwan-cht/SAE-R2-05-GE4",
  },
];

const autresProjets = [
  {
    slug: "Infographie-Cookies-Sessions",
    title: "Infographie : Comprendre les Cookies et les Sessions",
    description:
      "Infographie pédagogique expliquant de manière simple et visuelle le fonctionnement des cookies et des sessions sur le web.",
    image: "/images/InfographieCookies/infographie.jpg",
  },
];

export default function Projets() {
  return (
    <div className="my-10">
      {/* Section Projets Informatiques */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Projets Informatiques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projetsInformatiques.map((p) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              description={p.description}
              image={p.image}
              slug={p.slug}
              github={p.github}
            />
          ))}
        </div>
      </section>

      {/* Section Autres Projets */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Autres Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {autresProjets.map((p) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              description={p.description}
              image={p.image}
              slug={p.slug}
              //github={p.github}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
