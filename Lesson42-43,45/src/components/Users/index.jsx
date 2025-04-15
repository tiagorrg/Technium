import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUsers } from "../../slices/users/usersSlice";

export const Users = () => {
    const users = useSelector( (state) => state.users.value)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState ({
        id: '', 
        name: '',
        username: ''
    })

    useEffect(() => {
        let isActive = true
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                if (isActive) {
                    dispatch(addUsers(users.map(user => ({ 
                        id: user.id, 
                        name: user.name,
                        username: user.username
                    }))));
                }
            });
    
        return () => {
            isActive = false;
        };
    }, [dispatch]);

    return (
        <div>
            {
                users.map((user) => (
                    <div key={user.id}>{user.id} {user.name} {user.username}</div>
                ))
            }
            <form onSubmit={(e) => e.preventDefault()}>
                <span>id: {users.length + 1}</span>
                <input type="text" onChange={(e) => setFormData({...formData, name: e.target.value} )}/>
                <input type="text" onChange={(e) => setFormData({...formData, username: e.target.value} )}/>
                <button onClick={() => dispatch(addUsers([{...formData, id: users.length + 1}]))}>Добавить</button>
            </form>
        </div>
    )
}
