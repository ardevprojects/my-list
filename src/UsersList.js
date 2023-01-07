import React from 'react';
import './UsersList.css';

const UsersList = ({ users, deleteUser }) => {
    // console.log(props.users);
    const usersLi = users.map((user) => {
        return (<li key={user.id}>{user.name}<button onClick={() => deleteUser(user)}>x</button></li >)
    })


    return (
        <div>
            <div></div>
            <ul className='users-list'>{usersLi}</ul>
        </div>
    );
}

export default UsersList;
