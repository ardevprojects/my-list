import React from 'react';
import UsersList from './UsersList';
import './Users.css'

const Users = ({ users, listHeader, name, setName, addNewUser, deleteUser, ...props }) => {

    return (
        <div className='users-main'>
            <h1>{listHeader}</h1>
            <form>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type='text'
                    placeholder='Enter name here'
                />
                <button onClick={addNewUser}>Add User</button>
            </form>
            <UsersList users={users} deleteUser={deleteUser} />

        </div>
    );
}

export default Users;
