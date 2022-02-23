const dotenv = require('dotenv');
const server = require("./app");
dotenv.config({path: "config.env"});

// If uncaught exception immediately exit the app
process.on('uncaughtException', (err) => {
    console.log("UNCAUGHT EXCEPTION", err.name, err.message);
    process.exit(1);
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Listening at port ${PORT}`));

// If unhandled rejection prempt the resources acquired by the proecess first
process.on('unhandledRejection', (err) => {
    console.log("UNCAUGHT REJECTION", err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});