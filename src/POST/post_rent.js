const mongoose = require("../../modules/mongoose");
const { Rent } = require("../../models/rent");

const post_rent = async (bookId, studentId) => {
  try {
    const rentDate = new Date();
    const returnDate = new Date(rentDate);
    returnDate.setDate(returnDate.getDate() + 7);

    const newRent = new Rent({
      bookId,
      studentId,
      rentDate, // modelo ISO
      returnDate, // modelo ISO
    });

    const savedRent = await newRent.save();

    return {
      success: true,
      rent: savedRent,
    };
  } catch (error) {
    console.error("Erro na criação... ", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

module.exports = post_rent;
