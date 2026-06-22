import * as AlumnoService from '../services/alumno.service.js';

// getAll - Devuelve todos los alumnos, con opción de filtrar por grado
export const getAll = (req, res) => {
  const { grado } = req.query;

  const alumnos = AlumnoService.getAll({ grado });

  res.json(alumnos);
};

// getById - Devuelve un alumno por su ID
export const getById = (req, res) => {
  const alumno = AlumnoService.getById(Number(req.params.id));

  res.json(alumno);
};

// create - Agrega un nuevo alumno a la base de datos
export const create = (req, res) => {
  const nuevoAlumno = AlumnoService.create({
    nombre: req.body?.nombre,
    apellido: req.body?.apellido,
    grado: req.body?.grado,
    seccion: req.body?.seccion,
  });

  res.status(201).json(nuevoAlumno);
};

// update - Actualiza un alumno existente
export const update = (req, res) => {
  const alumnoActualizado = AlumnoService.update(
    Number(req.params.id),
    req.body,
  );

  res.json(alumnoActualizado);
};
// remove - Elimina un alumno por su ID
export const remove = (req, res) => {
  AlumnoService.remove(Number(req.params.id));

  res.status(204).send();
};
