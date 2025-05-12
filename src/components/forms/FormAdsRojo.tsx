import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Logo from "../../../public/assets/logo-MN-25-peq.webp";

interface FormAdsRojoProps {
  onClose: () => void;
  videoUrl: string;
  colectivo?: string;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = "6LdsmjYrAAAAAIqYvcDasgEd6w_sEVRtiftEerZ9";

const FormAdsRojo: React.FC<FormAdsRojoProps> = ({
  onClose,
  videoUrl,
  colectivo,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    origen: colectivo || "Página de Ads",
  });
  const [showVideo, setShowVideo] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [isFirstClose, setIsFirstClose] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "redirecting"
  >("idle");

  useEffect(() => {
    // Cargar el script de reCAPTCHA
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      // Ejecutar reCAPTCHA
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "submit_form",
      });

      const result = await emailjs.send(
        "service_peu3cq9",
        "template_b0vpsjc",
        {
          from_name: formData.nombre,
          phone: formData.telefono,
          source: formData.origen,
          message: `Nuevo Lead - ${formData.origen}
            Nombre: ${formData.nombre}   
            Teléfono: ${formData.telefono}
            Origen: Google Ads`,
          recaptcha_token: token,
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
              personalizada en la historia de Mn program
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
                  Nombre*
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-[#FD4A5C] focus:ring-[#FD4A5C] sm:text-sm px-4 font-space text-gray-900"
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
                  pattern="[0-9]*"
                  minLength={9}
                  maxLength={9}
                  value={formData.telefono}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setFormData({
                      ...formData,
                      telefono: value,
                    });
                  }}
                  className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-[#FD4A5C] focus:ring-[#FD4A5C] sm:text-sm px-4 font-space text-gray-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FE0000] text-white py-2 px-4 rounded-lg hover:bg-[#e54352] transition-colors duration-300 mt-4 font-space font-normal"
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
            <div className="mt-4 text-center">
              <div
                className="grecaptcha-badge"
                style={{
                  width: "256px",
                  height: "60px",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <div style={{ width: "256px", height: "60px" }}>
                  <iframe
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdsmjYrAAAAAIqYvcDasgEd6w_sEVRtiftEerZ9&amp;co=aHR0cHM6Ly92ZW50YXMubW5wcm9ncmFtLmNvbTo0NDM.&amp;hl=es&amp;v=v3&amp;size=invisible&amp;cb=1"
                    width="256"
                    height="60"
                    role="presentation"
                    name="a-1"
                    frameBorder="0"
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                  ></iframe>
                </div>
              </div>
            </div>
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

export default FormAdsRojo;
