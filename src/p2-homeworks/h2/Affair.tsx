import React from 'react'
import { AffairType } from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    const redColor = { color: 'red' }
    const coralColor = { color: 'coral' }
    const greenColor = { color: 'green' }
    const changeColor = props.affair.priority === 'high' ? redColor : props.affair.priority === 'low' ? greenColor : props.affair.priority === 'middle' ? coralColor : { color: 'white' }

    return (
        <div>
            Helping someone <span style={changeColor}>{props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
