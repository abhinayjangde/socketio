import express from "express";
import { Server } from "socket.io";
import path from "path";
const app = express();
const PORT = 3000;

console.log(path.join())
app.listen(PORT, ()=>{
    console.log("Server listing at 3000")
})