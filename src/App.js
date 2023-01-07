import React, { useState } from 'react';
import './App.css';
import Users from './Users';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Mickey Mouse' },
    { id: 2, name: 'Smok Wawelski' },
    { id: 3, name: 'Jeanne D`arc' },
  ]);
  const [name, setName] = useState('')

  const addNewUser = (e) => {
    e.preventDefault()
    const newUser = {
      id: Date.now(),
      name
    }
    setUsers([...users, newUser])
    setName('')
  }


  const deleteUser = (newUser) => {
    let newList = users.filter(p => p.id !== newUser.id);
    console.log(newList);
    // console.log(newUser);
    setUsers(newList)
  }

  return (
    <div className="App">
      <Users listHeader={`Users List`} users={users} name={name} setName={setName} addNewUser={addNewUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
