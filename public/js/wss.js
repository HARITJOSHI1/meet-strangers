import * as store from "./store.js";
import * as ui from "./ui.js";

export const registerSocketListeners = (socket) => {
    socket.on('connect', () => {
        console.log(`Client connected to socket.io with id ${socket.id}`);
        store.setSocketId(socket.id);
        ui.updatePersonalCode(socket.id);
    });
}