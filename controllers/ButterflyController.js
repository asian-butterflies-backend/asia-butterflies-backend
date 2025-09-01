import ButterflyModel from "../models/ButterflyModel.js";
export const getAllButterflies = async (req, res) => {
  try {
    const butterflies = await ButterflyModel.findAll();
    res.status(200).json(butterflies);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las mariposas" });
  }
};
/*
//trae una mariposa
const getOneButterfly = async () => {

};
//elimina una mariposa
const deleteButterfly = async () => {

};
//crea una mariposa
const createButterfly = async () => {

};
//actualiza una mariposa
const updateButterfly = async () => {

};*/
