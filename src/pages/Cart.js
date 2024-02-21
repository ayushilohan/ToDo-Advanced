import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list)
  const newList = useSelector(state => state.newList)
  const [buylist, setBuyList] = useState([])


  const boughtHandler = (index) => {
    let item = newList[index];
    setBuyList([...buylist, item]);
    dispatch({type:"buyFromNewList", index:index })
  }

  const cancelHandler = (index)=>{ dispatch({type:"cancelFromNewList", index:index }) }
  
  return (
    <div className='cart'>
      <div className='first-container'>
        <p>Welcome! Cart Page. Cart Count is {newList.length}</p>
        <ul>{ newList.map((item, index)=>{
          return (<li key={index}>
          {item}
          <button onClick={()=>cancelHandler(index)}>Cancel</button>
          <button onClick={()=>boughtHandler(index)}>Buy</button>
          </li>)
          })}
        </ul>
      </div>
    <br />
      <div className='second-container'>
        <p>Bought</p>
        <ul>
          {buylist.map((item, index)=>{
          return <li key={index}>{item} </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Cart