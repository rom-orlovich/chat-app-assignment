export const EMIT_EVENTS = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  JOIN_CHAT: "1002",
  LEAVE_CHAT: "1003",
  SEND_MESSAGE: "1004",
  BROADCAST_MESSAGES: "1005",
  BROADCAST_NEW_CHAT_JOINS: "1006",
  BROADCAST_CHAT_LEAVING: "1007",
};

export const getEventName = (key: keyof typeof EMIT_EVENTS) => EMIT_EVENTS[key];
