import { useState } from 'react';
import './App.css';
import BookList from './components/booklist';

function App() {
  const [booklist, setbooklist] = useState(['book1', 'book2', 'book3']);

   return (
    <>
   <h1>Favourite Books</h1>
   <p>Description</p>
   <BookList list={booklist}/>
   </>

  );
}

export default App;
