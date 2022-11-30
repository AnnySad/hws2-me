import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import {v1} from "uuid";

/*
* 1 - описать тип MessageType+
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

export type UserType={
    avatar:string
    name:string
}
export type UserMassageType={
    text: string
    time: string

}
export type MessageType = {
    id:string
    user: UserType
    message: UserMassageType
}

export const message0: MessageType = {
    id: v1(),
    user: {
        avatar: "https://slovnet.ru/wp-content/uploads/2018/10/20-49.jpg ",
        name: 'Me',
    },
    message: {
        text: '\'just do it...\'',
        time: '22:00',
    },
}
export const friendMessage0: MessageType = {
    id: v1(),
    user: {
        avatar: avatar,
        name: 'Friend',
    },
    message: {
        text: 'зеркальное сообщение для тренировки css',
        time: '22:22',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}

                <MessageSender M={Message} />

            </div>
        </div>
    )
}

export default HW1
