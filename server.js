import express from "express";
import "dotenv/config.js"
import "./config/database.js"

const server = express()
const PORT = 8080
const ready = ()=> console.log("server ready in port :"+PORT);
server.get('/',(request,response) =>{
    response.send('Hola mundo en Express')
})
server.get('/saludo',(request,response) =>{
    response.send('oi en Express')
})
server.listen(PORT,ready)



