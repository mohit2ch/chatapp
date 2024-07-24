import React, { useRef } from 'react';
import Chat from './Chat';

function MessageBox(props) {
    const dummyRef = useRef(null);
    
    return (
        
             <div className="overflow-hidden messages h-full flex flex-col justify-end bg-gray-900">
            <div className=" p-4 overflow-y-auto">
              
              <Chat start={true} image={"https://avatar.iran.liara.run/public/"} username={"user_1"} timestamp={"12:45"} message={"You were the Chosen One!"} status={"Delivered"}/>
              <Chat start={false} image={"https://avatar.iran.liara.run/public/"} username={"user_1"} timestamp={"12:49"} message={"You were the Chosen One!"} status={"Delivered"}/>
              <Chat start={true} image={"https://avatar.iran.liara.run/public/"} username={"user_1"} timestamp={"12:45"} message={"You were the Chosen One!"} status={"Delivered"}/>
              <Chat start={false} image={"https://avatar.iran.liara.run/public/"} username={"user_1"} timestamp={"12:49"} message={"You were the Chosen One!"} status={"Delivered"}/>
              <Chat start={true} image={"https://avatar.iran.liara.run/public/"} username={"user_1"} timestamp={"12:45"} message={"You were the Chosen One!"} status={"Delivered"}/>
              <Chat start={false} image={"https://avatar.iran.liara.run/public/"} username={"user_1"} timestamp={"12:49"} message={"You were the Chosen One!"} status={"Delivered"}/>
              <Chat start={true} image={"https://avatar.iran.liara.run/public/"} username={"user_1"} timestamp={"12:45"} message={"You were the Chosen One!"} status={"Delivered"}/>
              <Chat start={false} image={"https://avatar.iran.liara.run/public/"} username={"user_1"} timestamp={"12:49"} message={"You were the Chosen One!"} status={"Delivered"}/>
              <Chat start={true} image={"https://avatar.iran.liara.run/public/"} username={"user_1"} timestamp={"12:45"} message={"You were the Chosen One!"} status={"Delivered"}/>
              <Chat start={false} image={"https://avatar.iran.liara.run/public/"} username={"user_1"} timestamp={"12:49"} message={"You were the Chosen One!You were the Chosen One!You were the Chosen One!You were the Chosen One!You were the Chosen One!You were the Chosen One!You were the Chosen One!"} status={"Delivered"}/>
              <div className="chat" ref={dummyRef}></div>
            </div>
          </div>
        
    );
}

export default MessageBox;