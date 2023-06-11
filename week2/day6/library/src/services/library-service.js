import { collection, addDoc, query, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Book } from '../models/Book';

class BookService {
  constructor() {
    this.collection = 'books';
  }

  async fetchBooks() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const books = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const book = new Book(data.title, data.author, data.isbn);

      books.push(book);
    });

    return books;
  }

  async createBook(book) {
    const collectionRef = collection(db, this.collection);

    const docRef = await addDoc(collectionRef, {
      title: book.title,
      author: book.author,
      isbn: book.isbn,
    });
    return book;
  }

  async editBook(book) {
    const docRef = doc(db, this.collection, book.isbn);

    await updateDoc(docRef, {
      title: book.title,
      author: book.author,
      isbn: book.isbn,
    });

    return book;
  }

  async deleteBook(isbn) {
    const docRef = doc(db, this.collection, isbn);

    await deleteDoc(docRef);
  }
}

const service = new BookService();
export default service;
