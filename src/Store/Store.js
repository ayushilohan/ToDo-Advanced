import {legacy_createStore as createStore } from 'redux';

const counterReducer = (state={list:["pen","stick","glue","sticker","tape"], newList:["paper"]},action)=>{
    if(action.type === "addToList"){
        return {
            list: [...state.list, action.value],
            newList: state.newList
        }
    }

    if(action.type === "addToCart"){
        let val = state.list.splice(action.index,1)
        let value = val[0]
        return {
            list: [...state.list],
            newList: [...state.newList, value]
        }
    }

    if(action.type === "buyFromNewList"){
        state.newList.splice(action.index,1)
        return {
            list : state.list,
            newList : [...state.newList]
        }
    }

    if(action.type === "cancelFromNewList"){
        let val = state.newList.splice(action.index,1)
        let value = val[0]
        return {
            list : [...state.list, value],
            newList : [...state.newList]
        }
    }

    return state
}


const store = createStore(counterReducer)
export default store