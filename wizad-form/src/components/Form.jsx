import { useState } from "react";

function Form() {
  const [user, setUser] = useState({});
  let text;
  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUser(values=>({...values, [name]:value}))
  };
  const resetForm =()=>{
    setUser({})
  }
  return (
    <>
      {user.firstName && <div>FirstName :{user.firstName}</div>}
      {user.lastName && <div>LastName :{user.lastName}</div>}
      <input
        type="text"
        name="firstName"
        value={user.firstName || ""}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="lastName"
        value={user.lastName || ""}
        onChange={changeHandler}
      />

     {(user.firstName || user.lastName) && <button onClick={resetForm} >Reset</button>}
    </>
  );
}

export default Form;
