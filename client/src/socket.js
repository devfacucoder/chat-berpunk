import { io } from "socket.io-client";

const apiUrl = import.meta.env.VITE_URL_SOCKET;

export const socket = io(apiUrl, {
  autoConnect: true,
});