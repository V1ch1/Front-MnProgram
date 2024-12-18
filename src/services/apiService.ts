import axios from "axios";

const API_URL =
  "https://at4s9h6x58.execute-api.us-east-2.amazonaws.com/dev/mnprogram-api";

/**
 * Envía un evento de clic a la API
 * @param fuente - Fuente de donde proviene el evento (string)
 * @param section - Sección donde se encuentra el botón (string)
 * @param email - Correo del usuario (string)
 * @param icodcli - Código del cliente (string)
 * @param asunto - Asunto relacionado con el evento (string)
 * @param status - Estado del evento (string)
 * @param colectivo - Colectivo relacionado (string)
 */
export const registerClickEvent = async (
  fuente: string,
  section: string,
  email: string,
  icodcli: string,
  asunto: string,
  status: string,
  colectivo: string
) => {
  try {
    const payload = {
      fuente,
      section,
      email,
      icodcli,
      asunto,
      status,
      colectivo,
    };

    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error) {
    console.error("Error al enviar el evento:", error);
    throw error;
  }
};
