import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Logo from "../../../public/assets/logo-MN-25-peq.webp";

interface FormAdsDegradProps {
  onClose: () => void;
  videoUrl: string;
}

const FormAdsDegrad: React.FC<FormAdsDegradProps> = ({ onClose, videoUrl }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
  });
  const [showVideo, setShowVideo] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [isFirstClose, setIsFirstClose] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "redirecting"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      const result = await emailjs.send(
        "service_peu3cq9",
        "template_b0vpsjc",
        {
          from_name: formData.nombre,
          phone: formData.telefono,
          message: `Nuevo lead desde el formulario Ads 3 Degrad:
            Nombre: ${formData.nombre}
            Teléfono: ${formData.telefono}`,
        },
        "user_wT55QWOzsjzBAqBczstf8"
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormSubmitted(true);

        setTimeout(() => {
          setSubmitStatus("redirecting");
          setTimeout(() => {
            setShowForm(false);
            setShowVideo(true);
          }, 1000);
        }, 2000);
      }
    } catch (error) {
      console.error("Error al enviar el email:", error);
      setSubmitStatus("idle");
      alert(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    }
  };

  const handleClose = () => {
    if (formSubmitted) {
      onClose();
    } else if (isFirstClose) {
      setShowForm(false);
      setShowVideo(true);
      setIsFirstClose(false);
    } else {
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-lg shadow-xl w-full ${
          showVideo ? "max-w-xl md:max-w-5xl" : "max-w-xl"
        } relative`}
      >
        {/* Logo siempre visible y centrado */}
        <div className="w-full flex justify-center pt-6 absolute top-0 left-0 z-10">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>

        {showForm && (
          <div className="p-6 mt-16">
            <h2 className="text-2xl font-normal text-gray-900 mb-4 text-center font-space ">
              EMPIEZA GRATIS{" "}
            </h2>
            <p className="text-center text-black font-space font-normal pb-8">
              Déjanos tu teléfono y te haremos llegar la mejor oferta
              personalizada en la historia de Mn program
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-w-md mx-auto"
            >
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-normal text-gray-700 font-space"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-[#FD4A5C] focus:ring-[#FD4A5C] sm:text-sm px-4 font-space"
                />
              </div>

              <div className="mt-3">
                <label
                  htmlFor="telefono"
                  className="block text-sm font-normal text-gray-700 font-space"
                >
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-[#FD4A5C] focus:ring-[#FD4A5C] sm:text-sm px-4 font-space"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#29f19c] to-[#02a1f9] text-black hover:from-[#02a1f9] hover:to-[#29f19c] px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-lg font-space font-normal"
                disabled={submitStatus !== "idle"}
              >
                {submitStatus === "loading"
                  ? "Cargando video..."
                  : submitStatus === "redirecting"
                  ? "Redirigiendo..."
                  : "Ver vídeo"}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 text-center rounded-lg font-space font-normal">
                  ¡Gracias por tu interés! Nos pondremos en contacto contigo lo
                  antes posible.
                </div>
              )}
            </form>
          </div>
        )}

        {showVideo && (
          <div className="mt-24 h-[300px] md:h-[700px] p-6">
            <iframe
              src={
                videoUrl.includes("watch?v=")
                  ? videoUrl.replace("watch?v=", "embed/").split("&")[0]
                  : videoUrl
              }
              title="Video"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-20"
          aria-label="Cerrar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FormAdsDegrad;
