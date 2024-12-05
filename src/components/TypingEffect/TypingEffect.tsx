import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  fixedText: string; // Texto fijo en color negro
  typingTexts: string[]; // Varios textos que se mostrarán con efecto máquina de escribir (en color rojo)
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  fixedText,
  typingTexts,
}) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [textIndex, setTextIndex] = useState<number>(0);

  const typingSpeed = 100; // Velocidad de escritura en milisegundos
  const changeTextDelay = 2000; // Tiempo de espera entre cambios de texto (en milisegundos)

  // Efecto de máquina de escribir
  useEffect(() => {
    if (currentText.length < typingTexts[textIndex].length) {
      // Escribir una letra
      const timer = setTimeout(() => {
        setCurrentText(
          currentText + typingTexts[textIndex][currentText.length]
        );
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      // Después de completar el texto, esperar un tiempo y luego cambiar al siguiente
      const changeTimer = setTimeout(() => {
        setCurrentText("");
        setTextIndex((prevIndex) => (prevIndex + 1) % typingTexts.length); // Cambiar al siguiente texto
      }, changeTextDelay);
      return () => clearTimeout(changeTimer);
    }
  }, [currentText, textIndex, typingTexts]);

  return (
    <>
      <span className="text-black text-5xl font-bold">{fixedText}</span>
      <span className="text-[#FD5C6D] ml-2 text-5xl font-bold">
        {currentText}
      </span>
    </>
  );
};

export default TypingEffect;
