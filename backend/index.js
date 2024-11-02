import express from "express"
import dotenv from "dotenv"
dotenv.config({path:".env.local"})
import cors from "cors"
import connect from "./config/connectdb.js"
import userroutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"
import interviewroutes from "./routes/interviewRoutes.js"
const app = express()
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("Hello")
})

const allowedOrigins = ['https://inter-vue-glsv.vercel.app'];
app.use(cors(
    {
        origin:allowedOrigins,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials:true,

    }
))
app.use(express.json());
const port = process.env.PORT




app.use("/auth",userroutes)
app.use("/interview",interviewroutes)



app.listen(port,()=>{
    connect()
    console.log(`Server running at http://localhost:${port}`)
})