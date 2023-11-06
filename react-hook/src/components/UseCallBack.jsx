import { useCallback, useState } from "react"
import Todo from "./Todo"

function UseCallBack (){
const [count,setCount] =useState(0)
const [todo,setTodo]= useState(['Todo'])

const addCount = ()=>{
    setCount(count => count+1)
}
const addTodo = useCallback(()=>{
    setTodo([...todo,"New Task"])
},[todo])


    return (
        <div>
        <h1>useCallback</h1>
        <Todo todo={todo} addTodo={addTodo} />
        <h3>Count:::{count}</h3>
        <button onClick={addCount}>Increase Count</button>
        </div>
    )
}

export default UseCallBack;


