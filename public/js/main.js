const socket = io('/');
socket.on('connect', () => {
    console.log(`Client connected to socket.io with id ${socket.id}`);
});

console.log("hello");