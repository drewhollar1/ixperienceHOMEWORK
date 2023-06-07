import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Table from './components/Table';
import BookService from './services/BookService'; // Update the path if necessary

function App() {
  const [books, setBooks] = useState([]);
  const [incomingBook, setIncomingBook] = useState(null);
  
  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const bookService = new BookService();
    const fetchedBooks = await bookService.fetchBooks();
    setBooks(fetchedBooks);
  }

  async function createBook(book) {
    const bookService = new BookService();
    const createdBook = await bookService.createBook(book);
    setBooks([...books, createdBook]);
  }

  async function updateBook(book) {
    const bookService = new BookService();
    await bookService.updateBook(book);
    setBooks(prevBooks =>
      prevBooks.map(prevBook => (prevBook.id === book.id ? book : prevBook))
    );
  }

  async function deleteBook(book) {
    const bookService = new BookService();
    await bookService.deleteBook(book.id);
    setBooks(prevBooks =>
      prevBooks.filter(prevBook => prevBook.id !== book.id)
    );
  }

  function onBookCreated(book) {
    setIncomingBook(null);
    createBook(book);
  }

  function onBookDelete(book) {
    deleteBook(book);
  }

  function onBookEdit(book) {
    setIncomingBook(book);
    deleteBook(book);
  }
  

  return (
    <div className="container my-5">
      <div className="card text-center p-4">
        <h1>Library</h1>
        <Input
          incomingBook={incomingBook}
          onBookCreated={onBookCreated}
        ></Input>
        <Table
          books={books}
          onBookEdit={onBookEdit}
          onBookDelete={onBookDelete}
        ></Table>
      </div>
    </div>
  );
}

export default App;
