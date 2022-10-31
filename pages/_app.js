import React from "react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import SEO from "../next-seo.config";
import "@/styles/markdown-guide.scss";
import "@/styles/App.scss";
import { ThemeProvider } from "@/context/ThemeProvider";
import { UserProvider } from "@/context/UserProvider";
import Navigation from "@/components/nav/Navigation";
import { NotesProvider } from "../context/NotesProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <DefaultSeo {...SEO} />
      </Head>
      <UserProvider>
        <ThemeProvider>
          <NotesProvider>
            <Navigation />
            <Component {...pageProps} />
          </NotesProvider>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
