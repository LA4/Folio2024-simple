'use client'
import "./globals.css";
import Menu from "../../components/menu/Menu";
import Head from "next/head";



export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const pageDescription = `  Développeur Web spécialisé en React/redux/express - Création de sites web modernes et performants.  
Bienvenue sur mon site ! Je suis un développeur web  passionné avec une expertise en React et une connaissance des
langages tels que JavaScript, HTML5, et CSS3. Je me spécialise dans la création de sites web interactifs, applications web dynamiques, et interfaces utilisateur réactives.`

  return (
    <html lang="fr">
      <Head>
        <title>Andreotti Ludovic</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/public/lago_LA4.png" type="image/png" />
      </Head>
      <body >
        <Menu>{children}</Menu>
      </body>
    </html>
  );
}
