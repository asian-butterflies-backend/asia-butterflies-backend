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
