import dotenv from "dotenv"
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.on("error", () => {
            console.log("Something went wrong after database connected ");

        })

        app.listen(PORT, () => {
            console.log(`Server is listening at ${PORT}`);

        })
    })

    .catch((error) => {
        console.log(`Failed to start the server (index.js) : ${error}`);

    })
