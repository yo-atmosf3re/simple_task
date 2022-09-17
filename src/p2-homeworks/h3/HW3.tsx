import React, { useState } from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])
    const addUserCallback = (name: string) => {
        const user = {
            _id: v1(),
            name,
        }
        setUsers([...users, user])
    }
    return (
        <div>
            <hr />
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback} />
            <hr />
        </div>
    )
}

export default HW3
