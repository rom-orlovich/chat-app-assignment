import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import LoginUsers from "../../components/LoginUsers.ts/LoginUsers";

import useAuth from "../../hooks/useAuth";
import useSocket from "../../hooks/useSocket";
import { getAppRoutes } from "../../lib/appRoutes";
import { getEventName } from "../../lib/events";
import { MessageProps } from "../../types/messages.types";

const chatPageStyle = {
  pageContainer:
    "w-[100vw] h-[100vh] max-h-[100vh] bg-chatBackground overflow-hidden",
};

function ChatPage() {
  // Load the last messages data from the server.
  const data = useLoaderData() as MessageProps[];

  // Connect to socket.
  const socket = useSocket();
  const navigate = useNavigate();

  // Current login user data
  const { handleLogout, username, last } = useAuth();

  useEffect(() => {
    // If there is valid login username emit join chat socket event.
    if (username) socket.emit(getEventName("JOIN_CHAT"), username);
    else {
      // Otherwise navigate to home page.
      socket.emit(getEventName("LEAVE_CHAT"), last.current);
      navigate(getAppRoutes("HOME"));
    }
  }, [socket, username]);

  return (
    <section className={chatPageStyle.pageContainer}>
      <Chat socket={socket} curMessages={data} />
      <LoginUsers socket={socket} />
    </section>
  );
}

export default ChatPage;
