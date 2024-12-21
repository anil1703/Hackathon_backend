import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { routes } from "./Router/router.js"
import cors from "cors";

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

const dbUrl = process.env.MONGO_URL
mongoose.connect(dbUrl)

const database = mongoose.connection

database.once("connected", () => {
    console.log("Connected to Database")
})

database.on("error",() => {
    console.log("Error connecting to Database")
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})