import React from "react";
import logo from "../../../public/assets/logo_Mn_aniversario.svg";

const FooterAds: React.FC = () => {
  return (
    <footer className="bg-black h-[400px] w-full flex items-center justify-center">
      <img src={logo} alt="Logo" className="w-[400px] brightness-0 invert" />
    </footer>
  );
};

export default FooterAds;
