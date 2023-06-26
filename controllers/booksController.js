const asyncHandler = require('express-async-handler');
const Book = require('../entities/bookModel');

/**
 * @desc    Get all books
 * @route   GET /api/books
 * @access  Private
 */
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();

  res.status(200).json(books);
});

/**
 * @desc    Get a book by ID
 * @route   GET /api/books/:id
 * @access  Private
 */
const getBookById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const book = await Book.findById(id);

  if (!book) {
    res.status(404);
    throw new Error('Book not found');
  }

  res.status(200).json(book);
});

module.exports = {
  getBooks,
  getBookById,
};
