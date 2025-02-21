import express from "express"
import cors from "cors"

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_URI,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

cors(corsOptions);



export { app };