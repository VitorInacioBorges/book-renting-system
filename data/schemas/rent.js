const mongoose = require("../../modules/mongoose");

const rentSchema = new mongoose.Schema({
  bookId: {
    type: Number,
    required: true,
  },
  studentId: {
    type: Number,
    required: true,
  },
  rentDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
});

const Rent = mongoose.model("rent", rentSchema);

module.exports = { Rent };
