import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../../components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andreeotti Ludovic",
  description: `  Développeur Web spécialisé en React/redux/express - Création de sites web modernes et performants.  
  Bienvenue sur mon site ! Je suis un développeur web  passionné avec une expertise en React et une connaissance des
  langages tels que JavaScript, HTML5, et CSS3. Je me spécialise dans la création de sites web interactifs, applications web dynamiques, et interfaces utilisateur réactives.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}
