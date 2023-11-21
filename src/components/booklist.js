import React from 'react'

export default function BookList(props) {
  return (
    <div>
       <ol>
        <li>{props.list[0]}</li>
        <li>{props.list[1]}</li>
        <li>{props.list[2]}</li>
        </ol> 
        
            
    </div>
  )
}
