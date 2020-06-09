import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { OBJECT_WIDTH, OBJECT_HEIGHT } from '../config/constants'
import walkAvatar from '../img/Avatar.png'
import withAnimation from './withAnimation'


function ChatBubble(props) {
    return (
        <div className='chat-bubble'>
            <span>
                {props.chat.from}:&nbsp;
            </span>
            {props.chat.message}
        </div>
    )
}

function Avatar(props) {
    const [posX, posY] = props.pos
    const myChats = props.chats.filter(item => item.chat.from === props.name)
    
    
    useEffect(() => {
        props.objectImg.src = walkAvatar
    }, [props.objectImg])

    return (
        <div className='avatar' style={{ top: posY, left: posX }}>
            { myChats.length !== 0 && <ChatBubble chat={myChats[0].chat} /> }
            <canvas className='canvas1' ref={props.canvasRef} width={OBJECT_WIDTH} height={OBJECT_HEIGHT} />
            <div className='name-plate'><div>{props.name}</div></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chats: [...state.chat]
    }
}

export default connect(mapStateToProps)(withAnimation(Avatar))
