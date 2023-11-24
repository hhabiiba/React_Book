import React from 'react';

export default function BookList(props) {

  // Event handler for removin' a book based on its ID...
  const handleRemove = (id) => {

  // Call the onRemove prop function wid the book ID...
  props.onRemove(id);
  };

  // JSX code for rendering the book list...
  return (
    <div>
      <ol>
        {props.list.map((book) => (
          <li key={book.id}>
            {/* Display the book name */}
            {book.name}

            {/* Btn for removin' the book wid an onClick event handler */}
            <button onClick={() => handleRemove(book.id)}> &#10060; </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
