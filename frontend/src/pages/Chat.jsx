import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/Chat/ChatContainer";
import Contacts from "../components/Chat/Contacts";
import Welcome from "../components/Chat/Welcome";
import Loading from "../components/Loading";
import { SocketContext } from "../contextApi/Context";
export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
 
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const { setUser, setIsLogIn, isLoading, setIsLoading } =
    useContext(SocketContext);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const data = JSON.parse(localStorage.getItem("currentUser"));
      const obj = {
        name: data.username,
        email: data.email,
        isAvatarImageSet: true,
        avatarImage: data.avatarImage,
        _id: data._id,
        isLogIn: data.isLogin,
      };
      setIsLogIn(true)

      setUser(obj)
    }, 1000);
    async function check() {
      if (!localStorage.getItem("currentUser")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("currentUser")));
      }
    }
    check();
  }, [navigate]);
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    async function check() {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
        } else {
          navigate("/setAvatar");
        }
      }
    }
    check();
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Container>
            <div className="container">
              <Contacts contacts={contacts} changeChat={handleChatChange} />
              {currentChat === undefined ? (
                <Welcome />
              ) : (
                <ChatContainer currentChat={currentChat} socket={socket} />
              )}
            </div>
          </Container>
        </>
      )}
    </>
  );
}

const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #fff;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #080420;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
