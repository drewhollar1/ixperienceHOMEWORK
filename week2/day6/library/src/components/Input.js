
import React, { useState, useEffect } from 'react';
export default function Input(props) {
    const [book, setBook] = useState('');

    function onSubmission(e) {
        e.preventDefault();
        
        props.onBookCreate(book);
        setBook('');
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