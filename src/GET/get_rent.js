const mongoose = require("../../modules/mongoose");
const { Rent } = require("../../models/rent");

const get_rent = async () => {
  try {
    return await Rent.find();
  } catch (error) {
    console.error("Erro ao buscar o Aluguel: ", error.message);
    throw error;
  }
};

module.exports = get_rent;
