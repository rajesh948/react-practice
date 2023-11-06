import { memo } from "react"

function Todo({todo,addTodo}){
    console.log("todo")
    return(
        <>
        {todo.map((t,idx)=><div key={idx}>
            <h4>{t}</h4>
        </div>)}
            <button onClick={addTodo}>Add Todo</button>
        </>
    )

}

export default memo(Todo)