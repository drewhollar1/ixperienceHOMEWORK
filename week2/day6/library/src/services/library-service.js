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
      const book = new Book(doc.id, data.name, data.author, data.isbn);

      books.push(book);
    });

    return books;
  }

  async createBook(book) {
    const collectionRef = collection(db, this.collection);

    const docRef = await addDoc(collectionRef, {
      name: book.name,
      author: book.author,
      isbn: book.isbn,
    });

    book.id = docRef.id;
    return book;
  }

  async updateBook(book) {
    const docRef = doc(db, this.collection, book.id);

    await updateDoc(docRef, {
      name: book.name,
      author: book.author,
      isbn: book.isbn,
    });

    return book;
  }

  async deleteBook(bookId) {
    const docRef = doc(db, this.collection, bookId);

    await deleteDoc(docRef);
  }
}

const service = new BookService();
export default service;
