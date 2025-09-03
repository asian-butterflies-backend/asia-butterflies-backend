import ButterflyModel from "../models/ButterflyModel.js";
export const getAllButterflies = async (req, res) => {
  try {
    const butterflies = await ButterflyModel.findAll();
    res.status(200).json(butterflies);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las mariposas" });
  }
};

//trae una mariposa
export const getOneButterfly = async (req, res) => {
  try {
    const { id } = req.params;
    const butterfly = await ButterflyModel.findByPk(id);
    if (!butterfly) {
      return res.status(404).json({ error: "Mariposa no encontrada" });
    }
    res.status(200).json(butterfly);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la mariposa" });
  }
};

// 🦋 Eliminar una mariposa por su ID
export const deleteButterfly = async (req, res) => {
  try {
    // Tomar el "id" de la URL
    const { id } = req.params;

    // Buscar la mariposa en la base de datos
    const butterfly = await ButterflyModel.findByPk(id);

    // Comprobar si no se encuentra la mariposa
    if (!butterfly) {
      // Enviar error 404 si no existe
      return res.status(404).json({ error: "Mariposa no encontrada" });
    }

    // Eliminar la mariposa de la base de datos
    await butterfly.destroy();

    // Enviar mensaje de éxito
    res.status(200).json({ message: "Mariposa eliminada correctamente" });
  } catch (error) {
    // Mostrar el error en consola
    console.error(error);

    // Enviar error 500 si falla la operación
    res.status(500).json({ error: "Error al eliminar la mariposa" });
  }
};




//crea una mariposa
//const createButterfly = async () => {};

//actualiza una mariposa
//const updateButterfly = async () => {};
