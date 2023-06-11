import React from 'react'

export default function Table(props) {
    return (
        <div>
            <table class="table mt-3">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBNS</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="tableBody" class="table-group-divider">
                    {props.books.map((book) => {
                        return (
                            <tr key ={book.isbn}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td>
                                <button className="btn btn-danger bn-sm me-1"
                                onClick={() => props.onBookRemove(book.isbn)}> Delete </button>
                                <button className="btn btn-warning bn-sm ms-1"
                                onClick={() => props.onBookEdit(book.isbn)}> Edit </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
              </table>
        </div>
    );
}