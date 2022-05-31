import React from 'react'


export function Card(props) {
    console.log(props.item.description)
  return (
        <li>
            <strong>{props.title}</strong>
            <p>{props.type} {props.info.date}</p>
            <p>{props.description}</p>
            
            

        </li>
  )
}

