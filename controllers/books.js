const { response } = require("express");
const Book = require("../models/book");

const getBooks = async (req, res = response) => {
  const books = await Book.find();

  console.log("GET BOOKS");
  res.json({
    ok: true,
    books,
  });
};

const addBook = async (req, res = response) => {
  console.log("NEW BOOK");
  const book = new Book(req.body);
  console.log(book);

  try {
    const bookSave = await book.save();
    res.json({
      ok: true,
      book: bookSave,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const updateBook = async (req, res = response) => {
  console.log("UPDATE BOOK");
  const bookId = req.params.id;
  console.log("book id", bookId);

  try {
    const book = await Book.findById(bookId);

    if (!book) {
      res.status(404).json({
        ok: false,
        msg: "Book not found",
      });
    }

    const newBook = req.body;
    const updatedBook = await Book.findByIdAndUpdate(bookId, newBook, {
      new: true,
    });

    res.json({
      ok: true,
      book: updatedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el admin",
    });
  }
};

const deleteBook = async (req, res = response) => {
  console.log("DELETE BOOK");
  const bookId = req.params.id;
  console.log("book id", bookId);

  try {
    const book = await Book.findById(bookId);

    if (!book) {
      res.status(404).json({
        ok: false,
        msg: "Book not found",
      });
    }

    await Book.findByIdAndDelete(bookId);

    res.json({
      ok: true,
      msg: "Book deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el admin",
    });
  }
};
module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
};
