const express = require('express')
const http = require("http");
const cors = require('cors')
const socketIo = require("socket.io");
const data = require("./__mock_data__");

const app = express()
const port = process.env.PORT || 3001;
const server = http.createServer(app);
app.use(cors())

const io = socketIo(server, {
    cors: {
        origin: '*',
    }
}); // < Interesting!

const router = express.Router();
router.get("/api", (req, res) => {
    res.send({ response: "EMR Client search server running" }).status(200);
});
router.get('/api/data', (req, res) => {
    res.send(data)
})

app.use(router);
app.all('/', function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

server.listen(port, () => {
    console.log(`EMR Server listening at http://localhost:${port}`)
})


let interval;

io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 5000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
});

const getApiAndEmit = socket => {
    const randomItems = data[Math.floor(Math.random() * data.length)];
    data.push(randomItems);
    socket.emit("FETCH_EMR_DATA", shuffle(data));
};

const shuffle = arr => [...arr].reduceRight((res, _, __, s) => (res.push(s.splice(0 | Math.random() * s.length, 1)[0]), res), []);