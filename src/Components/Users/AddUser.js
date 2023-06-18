import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUsename, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enterUsename.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid input",

        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: " Invalid age",
        message: "please enter a valid age (age >0)",
      });
      return;
    }
    props.onAddUser(enterUsename, enterAge);
    setEnterUsername("");
    setEnterAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };
  const  errorHandler=()=>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>UserName</label>
          <input
            id="username"
            type="text"
            value={enterUsename}
            onChange={usernameChangeHandler}
          />
          <label>Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enterAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
