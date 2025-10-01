const { Rent } = require("../../data/schemas/rent");

const get_rent = async () => {
  try {
    return await Rent.find();
  } catch (error) {
    console.error("Erro ao buscar o Aluguel: ", error.message);
    throw error;
  }
}

/*
function get_rent(req, res) {
  if (rentedList.length < 1) {
    return res.status(200).send({ message: "Empty list!" });
  } else {
    const { bookId, studentId, rentDate } = req.query;
    let results = rentedList;

    if (bookId) {
      results = results.filter((rent) => rent.bookId == bookId);
    }
    if (studentId) {
      results = results.filter((rent) => rent.studentId == studentId);
    }
    if (rentDate) {
      results = results.filter((rent) => {
        // transforma as duas em string ISO só até o dia (sem horas)
        const rentDay = rent.rentDate.split("T")[0];
        const queryDay = new Date(rentDate).split("T")[0];
        return rentDay === queryDay;
      });
    }
    res.status(200).send({ results });
  }
}
*/
module.exports = get_rent;
