import express from 'express';
import bodyParser from "body-parser";
import start from "./database/db.js";
import cors from "cors";
import addRouter from "./router/add-route.js";


const PORT = 8000;
const app = express();
//?middleware
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());


//?routes
app.use("/", addRouter);
app.get("/", (req, res) => {
    res.send("hello whatsapp");
    console.log("hello world")
})
app.listen(PORT, () => {
        console.log(`Server is listening on port http://localhost:${PORT}`);
    });
start();