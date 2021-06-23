import * as React from "react";
import Image from "next/image";
import  Head  from "next/head";

import ExcelsiorLogo from "../../../public/assets/excelsior-logo.png";
import { LogoContainer, LogoText, Wrapper } from "./index.style";

const NavBar: React.FC = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <LogoContainer>
          <Image height="55px" width="58px" src={ExcelsiorLogo} />
          <LogoText>The Excelsior School</LogoText>
        </LogoContainer>
        <div>Lol</div>
      </Wrapper>
    </>
  );
};


export default NavBar;
