const { rentedList } = require("../../data/rentedList");

const post_rent = async (bookId, studentId, rentDate, returnDate) => {
  try {
    
  } catch (error) {

  }
}

/*
function post_rent(req, res) {
  const rentDate = new Date(); // nova data atual
  const returnDate = new Date(rentDate);

  returnDate.setDate(returnDate.getDate() + 7); // dia de devolucao é: data atual + 7 dias

  const newRent = {
    id: Date.now(),
    bookId: req.body.bookId,
    studentId: req.body.studentId,
    rentDate: rentDate.toISOString, // modelo ISO
    returnDate: returnDate.toISOString, // modelo ISO
  };

  rentedList.push(newRent);

  res.status(200).send({
    message: `ID: ${newRent.id}, Book ID: ${newRent.bookId}, Student ID: ${newRent.studentId}, Rent Date: ${newRent.rentDate}, Return Date: ${newRent.returnDate}`,
  });
}
*/
module.exports = post_rent;
