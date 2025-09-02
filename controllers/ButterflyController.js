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
