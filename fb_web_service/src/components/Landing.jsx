import { useState } from "react";
import getNotasEstudiantes from "../services/notas";

const Landing = () => {
  const [dni, setDni] = useState(0);
  const [notas, setNotas] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const nota = await getNotasEstudiantes(dni);
      setNotas(nota.data);
    } catch (error) {
      setNotas([]);
      console.error("Error al obtener las notas:", error);
    }
  };

  return (
    <>
      <div className="container column-gap-3">
        <div className="container-sm mt-5 p-4 shadow-lg rounded bg-light mx-auto">
          <h1 className="text-center fw-bold mb-4 text-primary">
            Bienvenido a la aplicación de calificaciones
          </h1>
          <p className="text-center text-muted">
            Hola, qué gusto que estés con nosotros. Aquí podrás ver tus calificaciones
          </p>

          <form onSubmit={handleSubmit} className="needs-validation">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label fw-semibold"
              >
                Número de identificación
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="123456789"
                onChange={({ target }) => setDni(target.value)}
              />
            </div>

            <div className="text-center">
              <button className="btn btn-primary px-4" type="submit">
                Ver calificaciones
              </button>
            </div>
          </form>
        </div>

        <div className="container-sm mt-5 p-4 shadow-lg rounded bg-light mx-auto">
          <h1 className="text-center fw-bold mb-4 text-secondary">
            Listado de Notas
          </h1>

          {console.log(notas)}
          {notas.length > 0 ? (
            <h2>Estudiante: {notas[0].student}</h2>
          ) : ( ''
          )}

          {notas.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Materia</th>
                  <th scope="col">Nota</th>
                </tr>
              </thead>
              <tbody>
                {notas.map((n, index) => (
                  <tr key={index}>
                    <td>{n.grades[0].course}</td>
                    <td>{n.grades[0].grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            
            <p className="text-center text-muted">
              No hay notas disponibles. Ingresa tu número de identificación y presiona “Ver calificaciones”.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Landing;
