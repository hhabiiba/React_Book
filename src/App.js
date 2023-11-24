import { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/booklist';
import Addbookform from './components/addbookform';

function App() {
    // State hook to manage the list of books...
  const [booklist, setBookList] = useState([]);

   // useEffect hook to fetch initial book list when the component mounts...
  useEffect(() => {
    fetchBooks();
  }, []);// Empty dependency array means run dis effect only once after mountin'...

    // Function to fetch books from the API (GET)...
  const fetchBooks = async () => {
    try {
      // Fetch data from the API...
      const getResponse = await fetch('https://6555594d84b36e3a431db80b.mockapi.io/Test');
       // Parse\Analyze the JSON response...
      const data = await getResponse.json();

      //`if` checks if the data is an array before updaatin' state...
      if (Array.isArray(data)) {
        setBookList(data);// It should update the book list state wid the fetched data...
      } else { //if the data is nt an array, it is logged to console.
        console.error('Invalid data received from the API:', data);
      }
    } catch (err) {//if any error has occured durin the `try` block, it's caught n logged here
      console.error('Error fetching data/books:', err);
    }
  };

  // Function to add a new book to the list (POST)...
  const postBook = async (bookName) => {
    try {
       // use of https POST request to add a new book to the API...
      const postResponse = await fetch('https://6555594d84b36e3a431db80b.mockapi.io/Test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: bookName }),
      });

      if (postResponse.ok) {
        // If the POST request is successful, update the book list
        fetchBooks();
      } 
    } catch (err) {
      console.error('Error adding book:', err);
    };
  };

  //Request to remove a book from the API (DELETE)...
  const delBook = async (delId) => {
    try {
      const res = await fetch(`https://6555594d84b36e3a431db80b.mockapi.io/Test/${delId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        // If the DELETE request is successful, update the book list
        fetchBooks();
      } 
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  //JSX code for rendering the component...-_-
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

      {/* Form for adding a new book */}
      <div className='form'>
      <Addbookform form={postBook} />

      </div>
      {/* Container for displaying the book list */}
      <div className='book-list-container'>

      {/* <BookList list={booklist} /> */}

      {/* BookList component with the booklist state and delBook function as props */}
      <BookList list={booklist} onRemove={delBook} />

      </div>
    </>
  );
}
  
export default App;

///ASYNC n AWAIT...^_^
//"async" key will always return promise n uses "await" key widin the function.
//"await" here waits for a promise to be resolved or rejected before movin' on to next code block n can only be used inside an "asyn" function.

///TRY n CATCH...^_^
//`try` n `catch` r for error handlin'. Code will execute in `try` block n is caught n handled in `catch` block if the error occurs. Thus, in mah code dese r used to handle errors tht may occur during asynchronous operations.
