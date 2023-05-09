import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (Uname, Uage) => {   //addUserHandler is used to fetch data from AddUser and put them into App.js array
    setUsersList((prevUsersList) => {      //Different way to use setState if we need to base on the last state
      return [...prevUsersList, {username:Uname, age: Uage, id: Math.random().toString()}];  //Add a new object into usersList
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
