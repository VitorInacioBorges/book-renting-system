const { bookList } = require("../../data/bookList");

function get_book(req, res) {
  if (bookList.length < 1) {
    return res.status(200).send({ message: "Empty list!" });
  } else {
    const { title, author, year, genre } = req.query;
    let results = bookList;

    if (title) {
      results = results.filter((book) => book.title == title);
    }
    if (author) {
      results = results.filter((book) =>
        book.author.toLowerCase().includes(author.toLowerCase())
      );
    }
    if (year) {
      results = results.filter((book) => book.year == year);
    }
    if (genre) {
      results = results.filter((book) =>
        book.genre.toLowerCase().includes(genre.toLowerCase())
      );
    }
    res.status(200).send({ results });
  }
}

module.exports = get_book;
