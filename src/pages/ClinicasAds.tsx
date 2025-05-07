import React from "react";
import ButtonWhatsapp from "../components/buttons/ButtonWhatsapp";
import Block1Ads from "../components/blockAds/Block1Ads";
import Block3Ads from "../components/blockAds/Block3Ads";
import FooterAds from "../components/Footer/FooterAds";
import icono2 from "../../public/assets/ads/icono2.svg";
import TopBannerDegrad from "../components/Banner/TopBannerDegrad";
import HeroComponentDegrad from "../components/HeroSection/HeroComponentDegrad";
import Block2AdsDegrad from "../components/blockAds/Block2AdsDegrad";
import Block4AdsDegrad from "../components/blockAds/Block4AdsDegrad";

const ClinicasAds: React.FC = () => {
  return (
    <div>
      <TopBannerDegrad colectivo="Clínicas Ads 1" />
      <HeroComponentDegrad colectivo="Clínicas Ads 1" />
      <Block1Ads
        iconBackgroundColor={{
          gradient: "linear-gradient(to right, #ff544f, #fad126)",
        }}
        iconColor="white"
      />
      <Block2AdsDegrad colectivo="Clínicas Ads 1" />
      <Block3Ads
        iconBackgroundColor="white"
        icon={icono2}
        secondColumnBackground={{
          gradient: "linear-gradient(to right, #ef0a6a, #b6359c)",
        }}
        secondColumnTextColor="white"
      />
      <Block4AdsDegrad
        colectivo="Clínicas Ads 1"
        symbolsColor="#000000"
        titleColor="#000000"
        firstButtonBackground={{
          gradient:
            "linear-gradient(93.08deg, #29f19c -47.39%, #02a1f9 155.2%)",
        }}
        firstButtonTextColor="black"
        secondButtonBackground={{
          gradient:
            "linear-gradient(93.08deg, #ff544f -47.39%, #fad126 155.2%)",
        }}
        secondButtonTextColor="black"
      />
      <ButtonWhatsapp />
      <FooterAds />
    </div>
  );
};

export default ClinicasAds;
