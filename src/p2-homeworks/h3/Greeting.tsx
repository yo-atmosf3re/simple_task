import React, { ChangeEventHandler } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: ChangeEventHandler<HTMLInputElement>
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers }
) => {
    const inputClass = error ? s.error : s.input
    const disButton = () => {
        return name === '' ? true : false
    }

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} />
            <br />
            <span className={s.errorColor}>{error}</span>
            <br />
            <button disabled={!name} onClick={addUser}>Add</button>
            <span> {totalUsers}</span>
        </div>
    )
}

export default Greeting
