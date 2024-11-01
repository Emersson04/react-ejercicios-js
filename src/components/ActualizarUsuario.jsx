import { handleUpdateUser, handleListarUsuarios } from "../helpers/Usuarios";

const UpdateUsuario = ({
  show,
  title,
  id,
  nombre,
  correo,
  cedula,
  apellidos,
  onNombreChange,
  onApellidoChange,
  onDescripcionChange,
  onTelefonoChange,
  onClose,
}) => {
  const handleUserUpdate = async () => {
    handleUpdateUser(id, { nombre, correo, cedula, apellidos });
    await handleListarUsuarios();
  };

  return (
    <div
      id="modalPersona"
      className={`modal fade ${show ? "show" : ""}`}
      aria-hidden={!show}
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Nombre"
                value={nombre}
                onChange={onNombreChange}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Nombre"
                value={apellidos}
                onChange={onApellidoChange}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-audio-description"></i>
              </span>
              <input
                type="text"
                id="description"
                className="form-control"
                placeholder="Descripcion"
                value={correo}
                onChange={onDescripcionChange}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </span>
              <input
                type="tel"
                id="telefono"
                className="form-control"
                placeholder="Precio"
                value={cedula}
                onChange={onTelefonoChange}
              />
            </div>

            <div className="d-grid col-6 mx-auto ">
              <button onClick={handleUserUpdate} className="btn btn-success">
                <i className="fa-solid fa-floppy-disk"></i> Guardar
              </button>
            </div>

            <div className="modal-footer">
              <button
                id="btnCerrar"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default UpdateUsuario;
