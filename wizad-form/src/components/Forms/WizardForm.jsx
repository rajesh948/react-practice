import { useState } from "react";
import UserDetail from "./UserDetail";
import UserEducation from "./UserEducation";
import UserHobby from "./UserHobby";
import "./style.css";

const WizardForm = (props) => {
  const [idx, setIdx] = useState(0);
  const [validation, setValidation] = useState(false);
  const numberOfComponent = 3;

  const onChangeInputHandler = (event) => {
    setValidation(
      Object.values(props.user).every((value) => value.length >= 3)
    );
    const name = event.target.name;
    const value = event.target.value;
    props.setUser((values) => ({ ...values, [name]: value }));
  };

  const onHandleForm = (direction) => {
    if (
      (direction && idx === numberOfComponent - 1) ||
      (!direction && idx === 0)
    )
      return;
    setIdx(direction ? idx + 1 : idx - 1);
  };
  const handleSubmit = () => {
    props.onFormSubmit(false);
  };

  return (
    <>
      <form className="form">
        {idx === 0 && (
          <UserDetail
            user={props.user}
            onChangeInputHandler={onChangeInputHandler}
          />
        )}
        {idx === 1 && (
          <UserEducation
            user={props.user}
            onChangeInputHandler={onChangeInputHandler}
          />
        )}
        {idx === 2 && (
          <UserHobby
            user={props.user}
            onChangeInputHandler={onChangeInputHandler}
          />
        )}
      </form>

      <div>
        <button
          className="btn"
          disabled={idx === 0}
          onClick={() => onHandleForm(0)}
        >
          Prev
        </button>
        {idx < 2 ? (
          <button
            className="btn"
            disabled={idx === 2}
            onClick={() => onHandleForm(1)}
          >
            Next
          </button>
        ) : (
          <button className="btn" disabled={!validation} onClick={handleSubmit}>
            submit
          </button>
        )}
      </div>
    </>
  );
};

export default WizardForm;
