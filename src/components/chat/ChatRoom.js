import React from 'react'
import ChatList from './ChatList';
import './css/ChatRoom.css'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
export default function ChatRoom({ database, user }) {
    const [input, setInput] = useState("");

    function writeUserData() {
        const elem = document.getElementById("allChats")
        if (input == "") {
            elem.scrollTop = elem.scrollHeight;
        }

    }
    function enterUserData(e) {
        if (e.keyCode == 13) {
            writeUserData();
        }
    }
    return (
        <div className='chatroom' >
            <ChatList db={database} user={user} />
            <div className='form' dir='rtl'>
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => { enterUserData(e) }} placeholder='پیام خود را وارد کنید...' id='msgBox' type="text" />
                <button class='send-btn' >ارسال</button>
            </div>
        </div>
    )
}