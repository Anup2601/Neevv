import {Server} from "socket.io";
import http from "http";
import express from "express";

const app=express();
const server=http.createServer(app);

const io=new Server(server,{
    cors:{
        origin:["http://localhost:5174"],
        credentials:true,
    }
});

export function getReceiverSocket(userId){
    return useSocketMap[userId];
}

// user to store online users
const useSocketMap={};

io.on("connection",(socket)=>{
    console.log("User connected", socket.id);
   
    const userId=socket.handshake.query.userId;
    if(userId){
        useSocketMap[userId]=socket.id;
        io.emit("getOnlineUsers",Object.keys(useSocketMap));
    }
    socket.on("disconnect",()=>{
        console.log("User disconnected",socket.id);
        delete useSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(useSocketMap));
    });
});

io.on("connection",(socket)=>{
    console.log("User connected", socket.id);
    socket.on("disconnect",()=>{
        console.log("User disconnected",socket.id);
    });
});

export {io,server,app};


