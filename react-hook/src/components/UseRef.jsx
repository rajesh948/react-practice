import { useEffect, useRef, useState } from "react"

function UseRef(){
const [temp,setTemp]= useState(0)
const [inputValue,setInputValue]= useState(0)
const flag = useRef(0)
const el = useRef()

useEffect(()=>{
    console.log("useEffect")
flag.current = flag.current+1
})

const printInput = ()=>{
    console.log(el)
    setInputValue(el.current.value)
}

    return (
        <div>
        <h1>Use Ref</h1>
        <h4>{flag.current}</h4>
      <div> <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      </div>
      <div>

        <button onClick={()=>setTemp(temp=>temp+1)}>Count : {temp}</button>
      </div>
      <div>

        <input
        ref={el}
        type="text"
        
        />
        <button onClick={printInput}>Print Input</button>
        </div>
        <button onClick={()=>(flag.current=flag.current+1)}>FlagCount : {flag.current}</button>
        </div>
    )
}

export default UseRef