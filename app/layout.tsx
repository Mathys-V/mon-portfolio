import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Portfolio - Mathys Vanheulle",
  description: "Portfolio personnel - Étudiant en BUT Informatique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="min-h-screen max-w-5xl mx-auto p-6">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
