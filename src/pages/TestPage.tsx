import React, { useEffect, useState } from "react";

const TestPage: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/save-event", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: "Hello from React!" }), // Enviar datos
        });

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data = await res.text(); // Obtener respuesta del endpoint
        setResponse(data); // Guardar la respuesta en el estado
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Prueba del Endpoint</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {response && <p>Respuesta: {response}</p>}
    </div>
  );
};

export default TestPage;
