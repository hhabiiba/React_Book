import { useState } from 'react';
import './App.css';
import BookList from './components/booklist';
import Addbookform from './components/addbookform';

function App() {

  // State hook to manage the list of books...
  const [booklist, setBookList] = useState([
    'The Kite Runner', 
    'The Fault in Our Stars',
    'A Thousand Splendid Suns'
    ]);
 
  // Event handler for addin' a new book to the list...
  const handleClick = (event) => {

  // Update the booklist state by addin' the new book...
  setBookList([...booklist, event]);
  };
  
  // Event handler for removin' a book from the list...
  const handleRemove = (updatedList) => {

  // To update the booklist state wid the updated list after removal...
  setBookList(updatedList);
  };


// JSX code for rendering the main App component...
return (
  <>
    {/* Header */}
    <h1 className='title'>Favourite Books</h1>

    {/* App description */}
    <p className='description'>
     The "Favourite Books" app is a simple React application designed to showcase and manage a list of favorite books.
      Users can add new books to the list using the provided form, and the added books are dynamically displayed in the app.
      The app is intended to serve as a basic example of managing state in a React application and interacting with user input.
    </p>

    {/* Form for addin' a new book */}
    <div className='form'>
    {/* handleClick function as a prop */}
    <Addbookform form={handleClick} />
    </div>

    {/* Container for displayin' the book list */}
    <div className='book-list-container'>
    {/*handleRemove function as prop */}
    <BookList list={booklist} onRemove={handleRemove} />
    </div>
  </>
);
}

export default App;
