import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Table from './components/Table';
import { Book } from './models/Book';
import BookService from './services/library-service'; // Update the path if necessary

function App() {
  const [books, setBooks] = useState([]);
  
  useEffect(
    () => {
      if (!books.length) {
        onInitialLoad();
      }
    },
    []
  );

  async function onInitialLoad() {
    try {
      const books = await BookService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBookCreate(book) {
    const newbook = await BookService.createBook(book);
    setBooks([...books, newbook]);
  }

  async function onBookRemove(bookId) {
    await BookService.deleteBook(bookId);
    setBooks(books.filter((book) => book.id !== bookId));
  }

  async function onBookEdit(bookId) {
    const book = await BookService.editBook(bookId);
    setBooks([...books, book]);
  }

  return (
    <div className="container my-5">
      <div className="card text-center p-4">
        <h1>Library</h1>
        <Input
          onBookCreate={onBookCreate}
        ></Input>
        <Table
          books={books}
          onBookEdit={onBookEdit}
          onBookRemove={onBookRemove}
        ></Table>
      </div>
    </div>
  );
}

export default App;
