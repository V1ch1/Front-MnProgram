import React from "react";

interface LinesUnderTitleHeroProps {
  lines: string[]; // Array de cadenas (HTML) que se van a renderizar
}

const LinesUnderTitleHero: React.FC<LinesUnderTitleHeroProps> = ({ lines }) => {
  return (
    <div className="lines mt-3">
      {lines.map((line, index) => (
        <p
          key={index}
          className="line text-2xl"
          dangerouslySetInnerHTML={{ __html: line }} // Usar HTML en el texto
        />
      ))}
    </div>
  );
};

export default LinesUnderTitleHero;
