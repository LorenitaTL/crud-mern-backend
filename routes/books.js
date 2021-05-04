/**
 * path: api/books
 */
const { Router } = require("express");
const {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

const router = Router();
router.get("/", getBooks);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
