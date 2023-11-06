import { useState } from "react";
import "./App.css";
import Demo from "./components/Demo";
import Form from "./components/Form";
import WizardForm from "./components/Forms/WizardForm";
import DisplayData from "./components/display-data/DisplayData";

function Combine(props) {
  return <>{props.isToggle ? <Form /> : <Demo />}</>;
}
function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    collage: "",
    course: "",
    address: "",
    hobby1:"",
    hobby2:"",
    hobby3:"",
  });
  const [isToggle, setIsToggle] = useState(false);
  const [isShowForm, setIsShowForm] = useState(true);

  const action = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <Combine isToggle={isToggle} /> */}
        {isShowForm ? (
          <WizardForm
            user={user}
            setUser={setUser}
            onFormSubmit={setIsShowForm}
          />
        ) : (
          <DisplayData user={user} />
        )}
        {/* <button onClick={action}>Toggle Component</button> */}
      </header>
    </div>
  );
}

export default App;
