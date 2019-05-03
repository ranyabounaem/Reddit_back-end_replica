const EventEmitter = require("events");
const jwt = require('../JWT/giveToken');


module.exports = class SocketHandler {
    constructor(IO) {
        // Socket middlewares & Configuration
        this.connectedUsers = [];
        this.emitter = new EventEmitter();

        this.IO = IO;

        this.initIO();
        this.initEmitter();    
    }
    initEmitter(){
        this.emitter.on("notification", (data) => {
            const socket = this.getSocket(data.username);
            if (!socket) return;
            socket.emit("notification", data);
        });
    }
    getSocket(username) {
        for (const user of this.connectedUsers) {
            if (user.name === username) {
                return user.socket;
            }
        }
        return null;
    }
    initIO() {
        this.IO.use(async (socket, next) => {
            const query = socket.request._query;
            const token = query.token;
            //Nto bt3mlo authentication ezai? na mb7bsh l e5tra3at di :'D
            const username = jwt.getUsernameFromToken(null, token);
            if (username) {
                return next();
            } else {
                //Disconnects by dafault, Check docs...
                next(new Error('Authentication error'));
            }
        });
        this.IO.on("connection", (socket) => {
            const Q = socket.request._query;
            const TOKEN = Q.token;
            const USERNAME = jwt.getUsernameFromToken(null, TOKEN);

            let exists = false;
            for (const user of this.connectedUsers) {
                if (user.name === USERNAME) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                this.connectedUsers.push({
                    name: USERNAME,
                    socket: socket
                });
            }

            socket.on("disconnect", () => {
                this.connectedUsers = this.connectedUsers.filter(user => user.name !== USERNAME);
            });
        });

    }
    getEmitter(){
        return this.emitter;
    }
}