import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreaseNum, increaseNum } from "../count";

function App(){
  
    const count = useSelector(state =>  state.num);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>COUNTER</h1>
            <label> {count} </label>
            <br />
            <button onClick={() => dispatch(increaseNum())}> + </button>
            <button onClick={() => dispatch(decreaseNum())}> - </button>
        </div>
    )
}


export default App