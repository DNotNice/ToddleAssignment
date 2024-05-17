import "dotenv/config";
import express from "express"
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT
app.get("/" , (req, res)=> res.send("Hello"))
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

