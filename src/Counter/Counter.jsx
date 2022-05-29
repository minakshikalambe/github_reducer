import React, { useReducer } from "react"

const initState={
    counter:0,
    noOfClicks:0
}

const counterAction={
    increment:"increment",
    decrement:"decrement",
    reset:"reset"
}
const reducer=(state,action)=>{
    switch(action.type){
        case counterAction.increment:{
          return{
              ...state,
              counter:state.counter+1
          }
        }
        case counterAction.decrement:{
            return{
                ...state,
                counter:state.counter-1
            }
        }
        case counterAction.reset:{
            return{
                ...initState
            }
        }
        default:return state
    }
}
function Counter(){
const[state,dispatch]=useReducer(reducer,initState);
console.log(state)

    return(
       <div>
           <h2>
           {state.counter} 
           </h2>
       <div>
           <button onClick={()=>dispatch({
               type:counterAction.increment
           })}>Add</button>
           <button onClick={()=>dispatch({
               type:counterAction.decrement
           })}>Red</button>
           <button onClick={()=>dispatch({
               type:counterAction.reset
           })}>RESET</button>
       </div>
       </div>
    )
}
export default Counter