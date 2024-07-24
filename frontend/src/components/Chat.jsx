import React from "react";

function Chat({start, image, username, timestamp, message, status  }) {
    const chatStart = start? "chat-start": "chat-end";
  return (
    <>
      <div className={`chat ${chatStart}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={image}
            />
          </div>
        </div>
        <div className="chat-header">
          {username}
          <time className="text-xs opacity-50 ml-1">{timestamp}</time>
        </div>
        <div className="chat-bubble">{message}</div>
        <div className="chat-footer opacity-50">{status}</div>
      </div>
    </>
  );
}

export default Chat;
