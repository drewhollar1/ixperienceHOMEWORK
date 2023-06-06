import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Table from './components/Table';

function App() {
  const [books, setBooks] = useState([]);
  const [incomingBook, setIncomingBook] = useState(null);
  
  function onBookCreated(book) {
    setIncomingBook(null);
    setBooks([...books, book]);
  }

  function onBookCreated(book) {
    setIncomingBook(null);
    setBooks([...books, book]);
  }

  function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function onBookEdit(book) {
    setIncomingBook(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }
  

  return (
    <div className = "container my-5">
    <div className = "card text-center p-4">
        <h1>Library</h1>
        <Input
        incomingBook = {incomingBook}
        onBookCreated={onBookCreated}
        ></Input>
        <Table
        books = {books}
        onBookEdit={onBookEdit}
        onBookDelete={onBookDelete}>
        </Table>
    </div>
    </div>
  );
}

export default App;