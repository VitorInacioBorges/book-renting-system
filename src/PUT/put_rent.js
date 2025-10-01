const mongoose = require("../../modules/mongoose");
const { Rent } = require("../../data/schemas/rent");

const put_rent = async(id, bookId, studentId, rentDate, returnDate) => {
  try {
    
  } catch (error) {
    
  }
}

/*
function put_rent(req, res) {
  if (rentedList.length < 1) {
    res.status(200).send({ message: "Empty list!" });
  } else {
    const id = req.params.id; // requisicao do ID do rent por URL
    const rentDate = new Date(); // nova data atual
    const returnDate = new Date(rentDate);
    let index = rentedList.findIndex((rent) => rent.id == id); // pega index do item no array

    returnDate.setDate(returnDate.getDate() + 7); // dia de devolucao é: data atual + 7 dias

    rentedList[index] = {
      id: id, // id é o mesmo id da URL
      bookId: req.body.bookId,
      studentId: req.body.studentId,
      rentDate: rentedList[index].rentDate, // modelo ISO
      returnDate: returnDate[index].returnDate, // modelo ISO
    };

    res.status(200).send({ message: "Rent updated succesfully!" });
  }
}
*/
module.exports = put_rent;
