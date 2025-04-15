import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './slice'

export const Users = () => {
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.value);
    const status = useSelector(state => state.users.status);

    return (
        <>
            <div>Пользователи</div>
            <button onClick={() => dispatch(fetchUsers())}>Показать пользователей</button>
            {
                <div>
                    {
                        status === 'loading' 
                        ?  '...loading' 
                        : users.map((user) => (
                                <div key={user.id}>{user.id} {user.name} {user.username}</div>
                            ))
                        
                    }
                </div>
            }   
        </>
    )
}