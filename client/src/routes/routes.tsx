import { createBrowserRouter } from "react-router-dom";
import { getMessages } from "../lib/api/messagesAPI";
import { getAppRoutes } from "../lib/appRoutes";

import ChatPage from "../pages/chat/ChatPage";
import HomePage from "../pages/home/HomePage";

import ProtectedRoute from "./components/ProtectedRoute";

export const routes = createBrowserRouter([
  {
    path: getAppRoutes("HOME"),
    element: <ProtectedRoute />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: getAppRoutes("CHAT"),
        element: <ChatPage />,
        loader: getMessages,
      },
    ],
  },
]);
