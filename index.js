import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"
import DosenRoute from "./routes/DosenRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute)
app.use(DosenRoute)

app.listen(3000, () => console.log('Server running at http://localhost:3000'));