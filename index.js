import { PORT } from "./config/index.js"
import express from "express"
import { apiRoutes } from "./routes/index.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/" , (req, res)=> res.send("Welcome to Social Media Application"))
app.use("/api" , apiRoutes)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

