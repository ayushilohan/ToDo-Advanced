import React from 'react'
import './ListItem.css'

const ListItem = (props) => {
  return (
    <div className='container'>
      <ul>
        {props.list.map((listItem, index)=>{
            return(<li key={index}>
            {listItem}
            <button onClick={()=>props.countHandler(index)}>Add to Cart</button>
            </li>
            )
        })}
        </ul>
    </div>
  )
}

export default ListItem