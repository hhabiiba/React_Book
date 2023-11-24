import React, { useState } from 'react';


export default function Addbookform(props) {

  // State hook to manage the input value for the book name...
  const [bookname, setbookname] = useState('');

  // Event handler for updatin' the book name based on UI...
  const handleinput = (event) => {
  setbookname(event.target.value);
  };

  // Event handler for submitting the form and addin' a new book...
  const handleadd = (event) => {

  // To prevent the default form submission behavior...
  event.preventDefault();

  // Call the form prop func. to add the book wid the provided name...
  props.form(bookname);

  // dis jst clears the input field after adding the book...
  setbookname('');
  };

  // JSX code for rendering the book addition form...
  return (
    <div>
      {/* Form wid onSubmit event handler */}
      <form onSubmit={handleadd}>

      {/* Input field for entering the book name */}
      <input type="text" value={bookname} onChange={handleinput} />

      {/* Btn to submit the form n add a new book */}
      <button>Add</button>
      </form>
    </div>
  );
}
