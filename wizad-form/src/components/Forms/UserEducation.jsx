function UserEducation(props) {
  return (
    <>
      <input
        type="text"
        value={props.user.collage }
        onChange={props.onChangeInputHandler}
        name="collage"
        placeholder="collage"
      />
      <input
        type="text"
        value={props.user.course }
        onChange={props.onChangeInputHandler}
        name="course"
        placeholder="course"
      />
      <input
        type="text"
        value={props.user.address }
        onChange={props.onChangeInputHandler}
        name="address"
        placeholder="address"
      />
    </>
  );
}

export default UserEducation;
