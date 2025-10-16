import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Section Accueil */}
      <section className="flex flex-col md:flex-row items-center mt-10">
        <Image
          src="/images/Accueil/photo_profile.jpg"
          alt="Photo de profil"
          width={160}
          height={160}
          className="rounded-full mb-6 md:mb-0 md:mr-10 shadow-lg"
          priority
        />
        <div>
          <h2 className="text-3xl font-bold mb-3 dark:text-gray-100">
            Salut, moi c’est Mathys 👋
          </h2>
          <p className="text-gray-700 mb-4 dark:text-gray-300">
            Étudiant en 2ème année de BUT Informatique, je suis passionné par le
            développement et la création d’interfaces modernes et intuitives.
            Curieux et motivé, je suis toujours à la recherche de défis qui me
            permettent de progresser et d’apprendre. Actuellement, je suis à la
            recherche d’un stage de 8 semaines, du 19 janvier au 13 mars 2026,
            pour mettre mes compétences en pratique, contribuer à des projets
            innovants et continuer à développer mon expérience professionnelle
            dans le domaine du développement.
          </p>

          <Link
            href="/projets"
            className="btn px-4 py-2 rounded-lg transition
                bg-blue-600 text-white hover:bg-blue-700
                dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500"
          >
            Voir mes projets
          </Link>
        </div>
      </section>

      {/* Séparateur esthétique */}
      <div className="flex items-center my-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
        <div className="mx-4 text-gray-400 dark:text-gray-500"></div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
      </div>

      {/* Section CV en images + téléchargement */}
      <section id="cv" className="mt-16 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Mon CV</h3>

        {/* Image du CV */}
        <div className="grid gap-4">
          <Image
            src="/images/CV-Mathys_VANHEULLE.jpg"
            alt="CV Page 1"
            width={1200}
            height={1600}
            className="w-full rounded-lg shadow-md"
            priority
          />
        </div>

        {/* Bouton pour télécharger le PDF */}
        <a
          href="/files/CV-Mathys_VANHEULLE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn mt-4 px-6 py-3 rounded-lg transition
                bg-blue-600 text-white hover:bg-blue-700
                dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500"
        >
          Télécharger mon CV
        </a>
      </section>

      {/* Section Contact */}
      <section id="contact" className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-3 dark:text-gray-100">Contact</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Tu peux me contacter via{" "}
          <a
            href="mailto:mathys.vanheulle@gmail.com"
            className="text-blue-600 hover:underline"
          >
            mon mail
          </a>{" "}
          ou sur{" "}
          <a
            href="https://www.linkedin.com/in/mathys-vanheulle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </>
  );
}
