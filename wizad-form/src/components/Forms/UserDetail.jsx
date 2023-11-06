function UserDetail(props) {
  return (
    <>
      <input
        type="text"
        name="firstName"
        value={props.user.firstName}
        onChange={props.onChangeInputHandler}
        placeholder="first name"
      />
      <input
        type="text"
        value={props.user.lastName}
        onChange={props.onChangeInputHandler}
        name="lastName"
        placeholder="last name"
      />
      <input
        type="text"
        value={props.user.email}
        onChange={props.onChangeInputHandler}
        name="email"
        placeholder="email"
      />
      <input
        type="text"
        value={props.user.contact}
        onChange={props.onChangeInputHandler}
        name="contact"
        placeholder="contact"
      />
    </>
  );
}

export default UserDetail;
