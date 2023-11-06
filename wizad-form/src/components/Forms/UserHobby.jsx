function UserHobby(props) {
  return (
    <>
      <input
        type="text"
        value={props.user.hobby1}
        onChange={props.onChangeInputHandler}
        name="hobby1"
        placeholder="hobby 1"
      />
      <input
        type="text"
        value={props.user.hobby2}
        onChange={props.onChangeInputHandler}
        name="hobby2"
        placeholder="hobby 2"
      />
      <input
        type="text"
        value={props.user.hobby3}
        onChange={props.onChangeInputHandler}
        name="hobby3"
        placeholder="hobby 3"
      />
    </>
  );
}

export default UserHobby;
