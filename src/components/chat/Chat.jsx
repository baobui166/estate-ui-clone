import { useState } from "react";
import { userData } from "../../lib/dummyData";
import "./chat.scss";

function Chat() {
  const [showChatBox, setShowChatBox] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Message</h1>
        <div className="message" onClick={() => setShowChatBox(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor amet...</p>
        </div>
        <div className="message" onClick={() => setShowChatBox(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor amet...</p>
        </div>
        <div className="message" onClick={() => setShowChatBox(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor amet...</p>
        </div>
        <div className="message" onClick={() => setShowChatBox(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor amet...</p>
        </div>
        <div className="message" onClick={() => setShowChatBox(true)}>
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor amet...</p>
        </div>
      </div>
      {showChatBox && (
        <div className="chatbox">
          <div className="top">
            <div className="user">
              <img src={userData.img} alt="" />
              <span>{userData.name}</span>
            </div>
            <div className="close" onClick={() => setShowChatBox(false)}>
              X
            </div>
          </div>
          <div className="center">
            <div className="chat_messages">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat_messages own">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat_messages">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat_messages own">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat_messages">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat_messages own">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat_messages">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat_messages own">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat_messages ">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat_messages own">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat_messages ">
              <p>Lorem ipsum dolor</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
