const mongoose = require("../../modules/mongoose");
const { Book } = require("../../data/schemas/book");

const delete_book = async (id) => {
  try {
    return await Book.findByIdAndDelete(id);
  } catch (error) {
    console.error("Erro ao deletar o livro! ", error.message);
    throw error;
  }
};
/*
function delete_book(req, res) {
  const id = req.body.id;
  for (let i = 0; i < bookList.length; i++) {
    if (bookList[i].id === id) {
      bookList.splice(i, 1);
      return res.status(200).send({
        message: `Book deleted succesfully!`,
      });
      break;
    }
    return res.status(200).send({
      message: "Book not found!",
    });
  }
}
*/
module.exports = delete_book;
