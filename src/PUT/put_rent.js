const mongoose = require("../../modules/mongoose");
const { Rent } = require("../../models/rent");

const put_rent = async (id, bookId, studentId, rentDate, returnDate) => {
  try {
    const updatedRent = await Rent.findByIdAndUpdate(
      id,
      { bookId, studentId },
      { new: true, runValidators: true }
    );
    return updatedRent;
  } catch (error) {
    console.error("Erro ao atualizar o aluguel: ", error.message);
    throw error;
  }
};

module.exports = put_rent;
