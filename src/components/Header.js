import React, {useState} from 'react'
import ListItem from './ListItem'
import { useNavigate } from "react-router-dom";
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [value, setValue] = useState()
    const list = useSelector(state => state.list)
    const newList = useSelector(state => state.newList)

    const inputHandler = (e) =>  setValue(e.target.value) 

    const addListHandler = () => { 
      dispatch({type:"addToList", value:value})
      setValue('');
   };

    const countHandler = (index) => { dispatch({type:"addToCart", index:index }) };
    
    const navigateCart = () => { navigate('/cart', {state : {count: newList.length} })}

  return (
    <div className='body'>
    <div className='header'>
        <p onClick={navigateCart}>Cart: {newList.length}</p>
    <input type='text' placeholder='Enter Item Name' value={value} onChange={inputHandler}></input>
    <button onClick={addListHandler}>Add To List</button>
    </div>
    <ListItem list={list} countHandler={countHandler} />
    </div>
  )
}

export default Header