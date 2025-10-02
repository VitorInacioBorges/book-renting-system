const mongoose = require("../../modules/mongoose");
const { Rent } = require("../../data/schemas/rent");

const delete_rent = async (id) => {
  try {
    return await Rent.findByIdAndDelete(id);
  } catch (error) {
    console.error("Erro ao deletar o aluguel! ", error.message);
    throw error;
  }
};

/*
function delete_rent(req, res) {
  const id = req.body.id;
  for (let i = 0; i < rentedList.length; i++) {
    if (rentedList[i].id === id) {
      rentedList.splice(i, 1);
      return res.status(200).send({
        message: `Rent deleted succesfully!`,
      });
      break;
    }
    return res.status(200).send({
      message: "Rent not found!",
    });
  }
}
*/
module.exports = delete_rent;
