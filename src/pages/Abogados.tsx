import Header from "../components/Header";
import HeroComponent from "../components/HeroComponent";
import dataAbogados from "../data/abogados.json";

const Abogados = () => {
  return (
    <div>
      <Header />
      <HeroComponent data={dataAbogados} />
    </div>
  );
};

export default Abogados;
