import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 7000})

wss.on("connection", (ws)=>{
    ws.on("message", (data)=>{
        ws.send("Ping pong")
    })
})
