import Card from "../UI/Card/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
        setError({
            title : 'username or age is empty',
            message : 'Please enter a valid name and age (non empty values)'
        })
      return;
    }
    if (+age < 1) {
        setError({
            title : 'Age is invalid',
            message : 'Please enter a valid Age ( > 0 )'
        })
      return;
    }

    console.log(username, age);
    setUsername("");
    setAge("");
    props.onAdd({
      name: username,
      age: age,
    });
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
      setError(null);
  }

  return (
    <div>
      {error && <ErrorModal Cancetitle = {error.title} message = {error.message} onClick = {errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangedHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
