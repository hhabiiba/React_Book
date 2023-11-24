import React from 'react';


export default function BookList(props) {

  // Event handler for removin' a book from the list...
  const handleRemove = (index) => {
  const updatedList = [...props.list];

  // Removes the book at the specified index...
  updatedList.splice(index, 1);

  //To call  onRemove prop func. wid the updated list...
  props.onRemove(updatedList);
  };

  // JSX code for rendering the BookList component...
  return (
    <div>
      <ol>
        {props.list.map((book, i) => (
          <li key={i}>

            {/* Displays the book name */}
            {book}

            {/* Btn to remove the book wid an onClick event handler */}
            <button onClick={() => handleRemove(i)}> &#10060; </button>

          </li>
        ))}
      </ol>
    </div>
  );
}
