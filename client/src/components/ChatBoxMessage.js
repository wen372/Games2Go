import React from 'react';
import { Link } from 'react-router-dom';

function ChatBoxMessage({ content, createdAt, username,  }) {
  return (
    <div className="">
    {createdAt.substring(0,10)} {" "} {createdAt.substring(11,19)} {" "} <b>{username}</b> {": "} {content}
    </div>
  );
}

export default ChatBoxMessage;