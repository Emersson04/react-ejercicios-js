import { useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosCliente } from "../helpers/axios";

// componente
import Show_alerta from "./Show_alerta";

const CrearPersona = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero_doc, setNumeroDoc] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  // manejo de errores
  const [error, setErrores] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const crearUsuario = async () => {
    try {
      const response = await AxiosCliente.post("registrar", {
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        numero_documento: numero_doc,
        tipo_documento: "cedula de ciudadania",
        contrasenia: contrasenia,
        especialidad: "hola",
        rol: "4",
      });
      if (response.data.Mensaje === "Registro de usuario exitoso") {
        console.log("usuario creado");
        //navegacion('/')
        setNombre("");
        setApellidos("");
        setCorreo("");
        setContrasenia("");
        setNumeroDoc("");
        Show_alerta("Registro de usuario exitoso");
        setErrores({});
      }
    } catch (e) {
      /*  console.error(e.response.data.error[0].message); */
      let errores = e.response.data.error;

      errores.forEach((element) => {
        console.log(element);
        switch (element.path[0]) {
          case "apellidos":
            /*  console.log(element.message); */
            setErrores((prevErrors) => ({
              ...prevErrors,
              apellidos: element.message,
            }));
            break;

          case "correo":
            setErrores((prevErrors) => ({
              ...prevErrors,
              correo: element.message,
            }));
            break;

          case "contrasenia":
            setErrores((prevErrors) => ({
              ...prevErrors,
              contrasenia: element.message,
            }));
            break;

          default:
            console.log("error");
            break;
        }
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(crearUsuario)}>
        <div className="mb-3">
          <label className="form-label">Nombres</label>

          <input
            type="text"
            {...register("nombre", { required: true, value: nombre })}
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
          />
          {errors.nombre?.type === "required" && <div>nombre es requerido</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">apellidos</label>

          <input
            type="text"
            value={apellidos}
            className="form-control"
            onChange={(e) => {
              setApellidos(e.target.value);
            }}
          />
          {error.apellidos && <p>{error.apellidos}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">correo</label>
          <input
            type="text"
            value={correo}
            className="form-control"
            onChange={(e) => setCorreo(e.target.value)}
          />
          {error.correo && <p>{error.correo}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">numero de documento</label>

          <input
            type="text"
            value={numero_doc}
            className="form-control"
            onChange={(e) => setNumeroDoc(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={contrasenia}
            onChange={(e) => setContrasenia(e.target.value)}
            className="form-control"
          />
          {error.contrasenia && <p>{error.contrasenia}</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CrearPersona;
