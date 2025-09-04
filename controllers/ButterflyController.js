import ButterflyModel from "../models/ButterflyModel.js";

export const getAllButterflies = async (req, res) => {
  try {
    const butterflies = await ButterflyModel.findAll();
    res.status(200).json(butterflies);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
  }
};

//crea una mariposa
export const createButterfly = async (req, res) => {
  try {
    const { 
      name, 
      sciname, 
      shortDescription, 
      longDescription, 
      activity, 
      status, 
      region, 
      location, 
      imageUrl 
    } = req.body;

    if (!name || !longDescription) {
      return res.status(400).json({ 
        error: "Faltan datos obligatorios: name y longDescription son requeridos" 
      });
    }

    const newButterfly = await ButterflyModel.create({
      name,
      sciname,
      shortDescription,
      longDescription,
      activity,
      status,
      region,
      location,
      imageUrl,
    });

    res.status(201).json(newButterfly);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la mariposa" });
  }
};

// Actualiza una mariposa por ID
export const updateButterfly = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      sciname,
      shortDescription,
      longDescription,
      activity,
      status,
      region,
      location,
      imageUrl,
    } = req.body;

    // Sequelize update
    const [updated] = await ButterflyModel.update(
      {
        name,
        sciname,
        shortDescription,
        longDescription,
        activity,
        status,
        region,
        location,
        imageUrl,
      },
      { where: { id } }
    );

    if (updated === 0) {
      return res.status(404).json({ message: error.message });
    }

    // Devolver la mariposa ya actualizada
    const updatedButterfly = await ButterflyModel.findByPk(id);
    res.status(200).json(updatedButterfly);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
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
