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

  async function onBookCreate(title, author, isbn) {
    const newbook = new Book(title, author, isbn)
    const book = await BookService.createBook(newbook);
    setBooks([...books, book]);
  }

  async function onBookRemove(isbn) {
    await BookService.deleteBook(isbn);
    setBooks(books.filter((book) => book.isbn !== isbn));
  }

  async function onBookEdit(isbn) {
    const book = await BookService.editBook(isbn);
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
