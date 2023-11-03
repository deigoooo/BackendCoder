import express from "express";
import handlebars from "express-handlebars"
import { Server } from "socket.io";
import mongoose from "mongoose";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import passport from "passport";
import initializePassport from "./config/passport.config.js";
import dotenv from 'dotenv'

import { Command } from 'commander'
const program = new Command()
program
    .option('-p <port>', 'Puerto del servidor', 8080)
    .option('--mode <mode>', 'Modo de ejecución', 'production')

program.parse()


const port = program.opts().p
const environment = program.opts().mode
dotenv.config({
    path: environment === 'production' ? './.env.production' : './.env.development'
})

import __dirname from "./utils.js"
import run from "./run.js";

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))
app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")

const MONGO_URI = "mongodb://127.0.0.1:27017"
const MONGO_DB_NAME = process.env.MONGO_DB_NAME

console.log(MONGO_DB_NAME)

app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true
}))
initializePassport()
app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(MONGO_URI, {
    dbName: MONGO_DB_NAME
}, (error) => {
    if(error){
        console.log("DB No conected...")
        return
    }
    const httpServer = app.listen(port, () => console.log(`Listening on port ${port}...`))
    const socketServer = new Server(httpServer)
    httpServer.on("error", (e) => console.log("ERROR: " + e))

    run(socketServer, app)
})