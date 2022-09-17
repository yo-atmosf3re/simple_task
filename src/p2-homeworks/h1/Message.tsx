import React from 'react'
import { MessagePropsType } from './HW1'
import s from './Message.module.css'

function Message(props: MessagePropsType) {
    const styles = {
        width: '50px',

    }
    return (
        <div className={s.message}>
            <img style={styles} src={props.avatar} alt="" />
            <div>{props.name}</div>
            <div>{props.time}</div>
            <div>{props.message}</div>
        </div>
    )
}

export default Message
