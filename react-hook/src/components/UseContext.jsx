import { createContext, useContext, } from "react";

const userContext = createContext();
function UseContext() {
  const user = {
    name: "user",
    phone: 2345435,
    email: "user@gmail.com",
  };
  

  return(
    <div>
   <userContext.Provider value={user}>
    <h1>Use Context</h1>
    
    <Component1/>
    </userContext.Provider>
    </div>
  )
}

function Component1(){
    return (
        <>
        <h1>Component 1</h1>
        <Component2/>
        </>
    )
}

function Component2(){
    return (
        <>
        <h1>Component 2</h1>
        <Component3/>
        </>
    )

}
function Component3(){
    return (
        <>
        <h1>Component 3</h1>
        <Component4/>
        </>
    )
}

function Component4(){
    return(
        <>
        <h1>Component 4</h1>
        <Component5/>
        </>
    )
}

function Component5(){
    const user = useContext(userContext)
    return (
        <>
        <h1>Component 5</h1>
<h3>Name:{user.name}</h3>
<h3>Phone:{user.phone}</h3>
<h3>Email:{user.email}</h3>
        </>
    )
}


export default UseContext
