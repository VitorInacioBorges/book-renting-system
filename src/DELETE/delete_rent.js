const { rentedList } = require("../../data/rentedList");

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

module.exports = delete_rent;
