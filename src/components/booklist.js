import React from 'react'

export default function BookList(props) {
  return (
    <div>
       <ol>
       {props.list.map((book, i)=> (
            <li key={i}>{book}</li>
        ))}
        </ol> 
        
            
    </div>
  )
}
