const { bookList } = require("../../data/bookList");

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

module.exports = delete_book;
