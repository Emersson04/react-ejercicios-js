import Show_alerta from "../components/Show_alerta";
import { AxiosCliente } from "./axios";

export const handleEliminarUsuario = async (id) => {
  try {
    let confirmacion = confirm(
      `¿Estas seguro que quieres elimininar el usuario con ID ${id}?`
    );
    if (confirmacion) {
      const response = await AxiosCliente.delete(`eliminar/${id}`);
      Show_alerta(response.data.Mensaje);
    } else {
      Show_alerta("Eliminacion Cancelada");
    }
  } catch (error) {
    console.error(error);
  }
};

export const handleListarUsuarios = async () => {
  try {
    const responser = await AxiosCliente.get("listar");
    return responser.data;
  } catch (error) {
    console.error(error);
  }
};

export const handleUpdateUser = async (id, user) => {
  try {
    const response = await AxiosCliente.put(`actualizar/${id}`, {
      us_nombre: user.nombre,
      us_apellidos: user.apellidos,
      us_correo: user.correo,
      us_numero_documento: user.cedula,
      us_tipo_documento: "cedula de ciudadania",
      rol_nombre: "4",
    });
    /* 
    console.log(response) */

    if (response) {
      await handleListarUsuarios();
      Show_alerta(response.data.Mensaje);
    }
  } catch (error) {
    console.error(error.response);
  }
};
