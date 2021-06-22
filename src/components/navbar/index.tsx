import * as React from "react";

import ExcelsiorLogo from "../../../public/assets/excelsior-logo.png";
import { LogoContainer, LogoText, Wrapper } from "./index.style";
import Image from 'next/image'
const NavBar: React.FC = () => {
  return (
    <>
      <Wrapper>
        <LogoContainer>
          <Image height="60px" width="60px" src={ExcelsiorLogo} />
          <LogoText>The Excelsior School</LogoText>
        </LogoContainer>
        <div>
          Lol
        </div>
      </Wrapper>
    </>
  );
};

export default NavBar;
