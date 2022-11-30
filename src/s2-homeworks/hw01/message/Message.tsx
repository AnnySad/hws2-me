import React from 'react'
import s from './Message.module.css'
import {MessageType, UserMassageType, UserType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    //id:string
    message:  MessageType
   // user:UserType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}

                        {props.message.user.name}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>

                        {props.message.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}

                {props.message.message.time}
            </div>
        </div>
    )
}

export default Message
