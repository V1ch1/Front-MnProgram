import React from "react";

import TopBanner from "../components/Banner/TopBanner";
import ButtonWhatsapp from "../components/buttons/ButtonWhatsapp";
import HeroComponentAds2 from "../components/HeroSection/HeroComponentAds2";
import Block1Ads from "../components/blockAds/Block1Ads";
import Block2Ads from "../components/blockAds/Block2Ads";
import Block3Ads from "../components/blockAds/Block3Ads";
import Block4Ads from "../components/blockAds/Block4Ads";
import FooterAds from "../components/Footer/FooterAds";
import icono2 from "../../public/assets/ads/icono2.svg";

const Abogados: React.FC = () => {
  return (
    <div>
      <TopBanner />
      <HeroComponentAds2 />
      <Block1Ads />
      <Block2Ads />
      <Block3Ads
        iconBackgroundColor="white"
        icon={icono2}
        secondColumnBackground="black"
        secondColumnTextColor="white"
      />
      <Block4Ads />
      <ButtonWhatsapp />
      <FooterAds />
    </div>
  );
};

export default Abogados;
