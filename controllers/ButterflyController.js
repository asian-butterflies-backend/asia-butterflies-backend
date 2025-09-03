import ButterflyModel from "../models/ButterflyModel.js";

// 🦋 Obtener todas las mariposas
export const getAllButterflies = async (req, res) => {
  try {
    // Pedir a la base de datos todas las mariposas
    const butterflies = await ButterflyModel.findAll();

    // Enviar la lista de mariposas al cliente
    res.status(200).json(butterflies);
  } catch (error) {
    // Enviar un error 500 si falla la operación
    res.status(500).json({ error: "Error al obtener las mariposas" });
  }
};

// 🦋 Obtener una mariposa por su ID
export const getOneButterfly = async (req, res) => {
  try {
    // Tomar el "id" de la URL
    const { id } = req.params;

    // Buscar la mariposa en la base de datos
    const butterfly = await ButterflyModel.findByPk(id);

    // Comprobar si no se encuentra la mariposa y enviar error 404
    if (!butterfly) {
      return res.status(404).json({ error: "Mariposa no encontrada" });
    }

    // Enviar la mariposa encontrada al cliente
    res.status(200).json(butterfly);
  } catch (error) {
    // Mostrar el error en consola
    console.error(error);

    // Enviar un error 500 si falla la operación
    res.status(500).json({ error: "Error al obtener la mariposa" });
  }
};


/*
// 🦋 Eliminar una mariposa
const deleteButterfly = async () => {
  // Comprobar si la mariposa existe
  // Borrar la mariposa de la base de datos
};

// 🦋 Crear una mariposa nueva
const createButterfly = async () => {
  // Validar los datos recibidos del cliente
  // Guardar la mariposa en la base de datos
};

// 🦋 Actualizar una mariposa existente
const updateButterfly = async () => {
  // Comprobar si la mariposa existe
  // Actualizar los datos de la mariposa en la base de datos
};
*/
