const mongoose = require("../../modules/mongoose");
const { Rent } = require("../../models/rent");

const delete_rent = async (id) => {
  try {
    return await Rent.findByIdAndDelete(id);
  } catch (error) {
    console.error("Erro ao deletar o aluguel! ", error.message);
    throw error;
  }
};

module.exports = delete_rent;
