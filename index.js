const { app, port } = require("./modules/express");
const mongoose = require("./modules/mongoose");

// Import routers
const booksRouter = require("./routes/books");
const rentsRouter = require("./routes/rents");
const studentsRouter = require("./routes/students");

// Use routers
app.use("/books", booksRouter);
app.use("/rents", rentsRouter);
app.use("/students", studentsRouter);

// Keep legacy endpoints for backward compatibility
app.use("/book", booksRouter);
app.use("/rent", rentsRouter);
app.use("/student", studentsRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
