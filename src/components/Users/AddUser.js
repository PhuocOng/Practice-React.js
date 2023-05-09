import React, { useState } from 'react';
import Card from "../UI/Card";
import Button from "./../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from '../UI/ErrorModal';


function AddUser(props) {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();  //Error to show/hide <ErrorModal>
    const addUserHandler = (event) => {
        event.preventDefault()   //prevent the form submitted when we click submit
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {  //Condition: if input is empty => not do anything
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if (parseInt(enteredAge) < 1) {  //Condition: If age <1 => not do anything, and we need parseInt() because enteredAge is String
            setError({
                title: 'Invalid Input',
                message: 'Please enter a positive age (>0)'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge(""); //Reset input bar and username after submitting
        setEnteredUsername("");  //Reset input bar and username after submitting
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {  //Handler to hide the <ErrorModal>
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}  {/* Display/Hide depend on error state */}
            <Card className={styles.input}>     {/* Card is own component, so normally it will not accept styles.input => We have to change props of <Card> */}
                <form onSubmit={addUserHandler}>    {/* This form will not be submitted when we click the button */}
                    <label htmlFor="username">Username</label>   {/* htmlFor is "for" but syntax in JSX */}
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />  {/* Set up value for double-binding => To reset the input bar after submitting */}
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} /> {/* Set up value for double-binding => To reset the input bar after submitting */}
                    <Button type="submit">Submit</Button>

                </form>
            </Card>
        </div>
    );
}

export default AddUser;  //To use this components outside