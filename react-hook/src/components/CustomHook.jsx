import useFetch from "../hooks/useFetch";

function CustomHook() {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      <h1>Custom Hook</h1>
      {data?.length &&
        data.map((obj) => (
          <div key={obj.id}>
            <hr/>
            <h4>{obj.userId} {obj.title}</h4>
          </div>
        ))}
    </div>
  );
}

export default CustomHook;
