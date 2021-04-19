import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { useState } from 'react';

function App() {

  const [usersList, setUsersList] = useState([]);

  const onAddUserListHandler = user => {
    setUsersList((prevUsersList) => {
      return ([...prevUsersList, {
        name : user.name,
        age : user.age,
        key : Math.random().toString()
      }])
    })
  }

  return (
    <div>
      <AddUser onAdd = {onAddUserListHandler}/>
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;
