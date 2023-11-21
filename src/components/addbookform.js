import React, { useState } from 'react'

export default function Addbookform(props) {
    const [bookname, setbookname] = useState("");
    const handleinput = (event)=> {
        setbookname(event.target.value);
    }
    const handleadd = (event) => {
        event.preventDefault();
        props.form(bookname);
        setbookname("")
    }
  return (
    <div> 
     <form onSubmit={handleadd}>
     <input type= "text" value= {bookname} onChange={handleinput}/>
     <button>Add</button>
     </form>
    </div>
  )
}
