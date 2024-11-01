import { Plantilla } from "../components/pages/Plantilla";

import { toast } from "react-toastify";

export const AlertasConToastTyfi = () => {
  const fakeRequest = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // Simular éxito o error aleatorio
        success ? resolve("Petición exitosa") : reject("Error en la petición");
      }, 2000); // Simula una petición de 2 segundos
    });
  };
  return (
    <>
      <Plantilla>
        <div>
          <button
            onClick={() =>
              toast.promise(
                fakeRequest(), // Simulación de la promesa
                {
                  pending: "Enviando la petición...",
                  success: "¡Petición completada con éxito! 🎉",
                  error: "Hubo un error en la petición. ❌",
                }
              )
            }
          >
            React ToasTify
          </button>
        </div>
      </Plantilla>
    </>
  );
};
