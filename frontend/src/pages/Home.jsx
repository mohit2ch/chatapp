import SearchBar from "../components/SearchBar";
import User from "../components/User";
import Chat from "../components/Chat";
import { useRef } from "react";
import MessageBox from "../components/MessageBox";

export default function Home(params) {

    function submitHandler(event){
        event.preventDefault();
        executeScroll(); 
    }
  let users = [
    "User 1",
    "User 2",
    "User 3",
    "User 1",
    "User 2",
    "User 3",
    "User 4",
  ];
  return (
    <>
      <div className="flex rounded-lg overflow-hidden w-full h-full">
        <div className="people h-full">
          <div className="bg-gray-600 h-full">
            <SearchBar />
            <div className="userlist join join-vertical w-72 h-full bg-gray-700 overflow-y-auto border-solid">
              {users.map(function (ele, index) {
                return (
                  <User
                    key={index}
                    fullname={ele}
                    profile={"https://avatar.iran.liara.run/public/"}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="messagebox w-full flex flex-col bg-gray-400">
          <div className="header w-full">
            <User
              fullname={"User 1"}
              profile={"https://avatar.iran.liara.run/public/"}
            />
            
          </div>
          <MessageBox/>
          <form action="" className="flex bg-gray-300">
            <textarea className="textarea h-12 w-full bg-gray-300 p-2 text-black" />
            <button onClick={submitHandler} className="bg-gray-700 hover:bg-gray-800 h-full w-12">
              {" "}
              {">"}{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
