import { useState } from 'react';
import './App.css';
import BookList from './components/booklist';
import Addbookform from './components/addbookform';
function App() {
  const [booklist, setbooklist] = useState(['book1', 'book2', 'book3']);
  const handleClick = (event) => { 
    setbooklist([...booklist, event]);
  }
   return (
    <>
   <h1>Favourite Books</h1>
   <p>Description</p>
   <Addbookform form={handleClick}/>
   <BookList list={booklist}/>
   </>

  );
}

export default App;
