import { useState } from "react";
import { Faq } from "../../types/types";

const FAQs = ({ faqs }: { faqs: Faq[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pageName = location.pathname.split("-"); // Divide la cadena por el guion
  const secondWord = pageName[1]; // Accede a la segunda palabra

  // Definir un objeto de reemplazos para las palabras específicas
  const replacements: { [key: string]: string } = {
    clinicas: "Clínicas",
    formacion: "Formación",
    asesorias: "Asesorías",
    odontologos: "Odontólogos",
  };

  // Convierte la palabra a minúsculas para la comparación, y luego reemplaza si está en el objeto
  const formattedSecondWord =
    replacements[secondWord.toLowerCase()] ||
    secondWord.charAt(0).toUpperCase() + secondWord.slice(1).toLowerCase();

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="container mx-auto p-4 space-y-4 mb-[120px]">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Preguntas frecuentes:
      </h2>
      <h3 className="text-4xl font-bold text-center text-[#0066CC] mb-6">
        Software para {formattedSecondWord} de MN program
      </h3>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div className="border border-gray-300 rounded-t-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium focus:outline-none focus:ring focus:ring-gray-300 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-500 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div
              className="px-4 pt-8 pb-4 text-black text-md rounded-b-lg"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
