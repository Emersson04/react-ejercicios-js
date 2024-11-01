import { useState, useEffect } from "react";
import {
  handleEliminarUsuario,
  handleListarUsuarios,
} from "../helpers/Usuarios";

// componentes
import Modal from "./Modal";
import CrearPersona from "./CrearUsuario";
import UpdateUsuario from "./ActualizarUsuario";
import { Plantilla } from "./pages/Plantilla";

// generar pdf
import PdfGenerado from "./Pdf";
import { PaginatioComponent } from "./Pagination";

const Usuarios = () => {
  // areglo de los usuarios
  const [usuarios, setUsuarios] = useState([]);

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [cedula, setCedula] = useState("");

  // paginacion

  const [personaPerPage, setPersonaPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPersonas = usuarios.length;

  const lastIndex = currentPage * personaPerPage; // 1 * 8 = 8

  const firsIndex = lastIndex - personaPerPage; // 8 - 8 = 0

  // fin de estados de paginacion

  const listarUsuarios = async () => {
    const res = await handleListarUsuarios();
    setUsuarios(res);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal2 = (id, nombre, correo, cedula, apellidos) => {
    setId(id);
    setShowModal(true);
    setNombre(nombre);
    setCorreo(correo);
    setCedula(cedula);
    setApellidos(apellidos);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const eliminarUsuario = async (id) => {
    await handleEliminarUsuario(id);
    listarUsuarios();
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  return (
    <>
      <Plantilla>
        <div className="w-full">
          <div className="App">
            <div className="container-fluid">
              <div className="row mt-3">
                <div className="col-md-4 offset-4">
                  <div className="d-grid mx-auto">
                    <Modal
                      contenido={<CrearPersona />}
                      id={"crear"}
                      nombreBoton={"Agregar Usuario"}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12 col-lg-8 offset-lg-2">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>persona</th>
                          <th>email</th>
                          <th>numero de documento</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="table-group-divider">
                        {usuarios
                          .map((usuario) => (
                            <tr key={usuario.idUsuarios}>
                              <td>{usuario.idUsuarios}</td>
                              <td>{usuario.us_nombre}</td>
                              <td>{usuario.us_correo}</td>
                              <td>{usuario.us_numero_documento}</td>
                              <td>
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    openModal2(
                                      usuario.idUsuarios,
                                      usuario.us_nombre,
                                      usuario.us_correo,
                                      usuario.us_numero_documento,
                                      usuario.us_apellidos
                                    )
                                  }
                                >
                                  actualizar
                                </button>

                                <button
                                  className="btn btn-danger"
                                  onClick={() =>
                                    eliminarUsuario(usuario.idUsuarios)
                                  }
                                >
                                  eliminar
                                </button>
                              </td>
                            </tr>
                          ))
                          .slice(firsIndex, lastIndex)}
                      </tbody>
                    </table>

                    <div className="d-flex justify-content-between">
                      <PdfGenerado />{" "}
                      <PaginatioComponent
                        personaPerPage={personaPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        total={totalPersonas}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {/* modal  */}
            <UpdateUsuario
              show={showModal}
              onClose={closeModal}
              id={id}
              title={`Actualizar Usuario ${nombre}`}
              nombre={nombre}
              apellidos={apellidos}
              correo={correo}
              cedula={cedula}
              onNombreChange={(e) => setNombre(e.target.value)}
              onDescripcionChange={(e) => setCorreo(e.target.value)}
              onApellidoChange={(e) => setApellidos(e.target.value)}
              onTelefonoChange={(e) => setCedula(e.target.value)}
            />
          </div>
        </div>
      </Plantilla>
    </>
  );
};

export default Usuarios;
