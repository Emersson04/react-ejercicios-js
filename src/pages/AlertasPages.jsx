import { Toaster, toast } from "sonner";
import { Plantilla } from "../components/pages/Plantilla";

export const Alertas = () => {
  const peticion = () => {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  };

  return (
    <>
      <Plantilla>
        <div className="bg-red-400">hola desde las alertas</div>
        <Toaster richColors />
        <button
          onClick={() =>
            toast.promise(peticion, {
              success: "archivo cargado correcgamente",
              error: "Error al Cargar el archivo",
              loading: "subiendo el Archivo",
            })
          }
        >
          Give me a toast
        </button>
      </Plantilla>
    </>
  );
};
