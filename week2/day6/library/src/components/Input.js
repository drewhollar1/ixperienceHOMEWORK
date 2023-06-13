import { Book } from '../models/Book';
import React, { useState, useEffect } from 'react';
export default function Input(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');

    useEffect(() => {
        if (props.incomingBook) {
            setTitle(props.incomingBook.title);
            setAuthor(props.incomingBook.author);
            setIsbn(props.incomingBook.isbn);
        }
    }, [props.incomingBook]);

    function onSubmission(e) {
        e.preventDefault();
        let inputBook = new Book (null, title, author, isbn);
        props.onBookCreate(inputBook);
        setTitle('');
        setAuthor('');
        setIsbn('');
    }

    return (
        <div>
            <form id="inputForm" onSubmit={onSubmission}>
            <input id = "titleInput" class="form-control mt-2" type="text" placeholder="Book Title"
            onChange = {(e) => setTitle(e.target.value)}></input>
            <input id = "authorInput" class="form-control mt-2" type="text" placeholder="Book Author"
            onChange = {(e) => setAuthor(e.target.value)}></input>
            <input id = "isbnInput" class="form-control mt-2" type="text" placeholder="Book ISBN"
            onChange = {(e) => setIsbn(e.target.value)}></input>

            <button type="submit" class="btn btn-primary btn-lg mt-3">
            {props.incomingBook ? 'Edit Book' : 'Submit Book'}</button>
            </form>
        </div>
    );
}