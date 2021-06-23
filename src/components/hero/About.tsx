import * as React from "react";
import Head from "next/head";
import { AboutHeader } from "./About.style";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AboutHeader>
        About Us
      </AboutHeader>
    </>
  );
};

export default About;
