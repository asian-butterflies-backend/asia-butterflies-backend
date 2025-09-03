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

/*
//elimina una mariposa
const deleteButterfly = async () => {

};
//crea una mariposa
const createButterfly = async () => {

};
//actualiza una mariposa
const updateButterfly = async () => {

};*/
