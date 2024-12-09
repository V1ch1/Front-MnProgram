import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  fixedText: string; // Texto fijo
  typingTexts: string[]; // Textos dinámicos que se escribirán con el efecto
  fixedTextColor: string; // Color del texto fijo
  typingTextColor: string; // Color del texto con efecto máquina de escribir
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  fixedText,
  typingTexts,
  fixedTextColor,
  typingTextColor,
}) => {
  const [currentText, setCurrentText] = useState<string>(""); // Texto actual en proceso de "escritura"
  const [textIndex, setTextIndex] = useState<number>(0); // Índice del texto actual en `typingTexts`

  const typingSpeed = 170; // Velocidad de escritura en milisegundos
  const changeTextDelay = 2000; // Tiempo de espera entre cambios de texto

  useEffect(() => {
    if (currentText.length < typingTexts[textIndex].length) {
      const timer = setTimeout(() => {
        setCurrentText(
          currentText + typingTexts[textIndex][currentText.length]
        );
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      const changeTimer = setTimeout(() => {
        setCurrentText("");
        setTextIndex((prevIndex) => (prevIndex + 1) % typingTexts.length); // Cambiar al siguiente texto
      }, changeTextDelay);
      return () => clearTimeout(changeTimer);
    }
  }, [currentText, textIndex, typingTexts]);

  return (
    <div>
      <span
        className="text-5xl font-bold"
        style={{ color: fixedTextColor }} // Color del texto fijo
      >
        {fixedText}
      </span>
      <span
        className="ml-2 text-5xl font-bold"
        style={{ color: typingTextColor }} // Color del texto dinámico
      >
        {currentText}
      </span>
    </div>
  );
};

export default TypingEffect;
