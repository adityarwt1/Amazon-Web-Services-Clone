import express from 'express'
import dotEnv from 'dotenv'
import {MongoDbSevices} from '../services/mongodbServices.js'
import { corsFunction } from '../middleware/cors/corsOrigin.js'
// running dot env
dotEnv.config({
    debug:true
})
const expressApp = express()
const port = process.env.PORT || 8000
const mongoDbServices = new MongoDbSevices()

// middlewares
expressApp.use(express.json())
expressApp.use((req, res, next)=> corsFunction(req, res, next))

expressApp.get('/', async (req,res)=>{
    res.status(200).json({
        message:"Hellow worlds!"
    })
})

// health check
expressApp.get('/health',async (req, res)=>{
    return res.status(200).json({
        message:"Server is healthy!"
    })
})
// Connect to database on startup
mongoDbServices.mongoConnect().then(isConnected => {
    if (isConnected) {
        console.log("Connected to MongoDB!")
    } else {
        console.warn("Warning: MongoDB connection failed. Server starting anyway.")
    }
})

expressApp.listen(port, ()=>{
    console.log("Server is running!")
})
