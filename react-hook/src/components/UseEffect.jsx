import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return <h1>Timer: {count} </h1>;
}

function UserEffect() {
  const [number, setNumber] = useState(0);
  const [operation, setOperation] = useState({ sum: 0, multiplication: 1 });
  const [numArray, setNumArray] = useState([]);

  const addNumber = () => {
    if(!Number(number)) return;
    setNumArray((array) => [...array, number]);
    setNumber(0)
  };
  useEffect(() => {
    if(numArray.length === 0) return;
    setOperation((obj) => ({
      sum: numArray.reduce((acc, curr) => acc + Number(curr), 0),
      multiplication:numArray.reduce((acc, curr) => acc * curr, 1),
    }));
  }, [numArray]);

  return (
    <div>
      <h1>User Effect</h1>
      <div>
        <Timer />
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <div>
          <h3>Sum:{operation.sum}</h3>
          <h3>Multiplication:{operation.multiplication}</h3>
          <h4>{numArray.map((num,idx)=> <span key={idx}>{num},</span>)}</h4>
        </div>
        <button onClick={addNumber}>Add Count</button>
      </div>
    </div>
  );
}

export default UserEffect;
