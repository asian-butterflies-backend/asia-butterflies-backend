import express from "express";
import butterflyRouter from "./routes/butterflyRoutes.js";
import db_connection from "./database/db_connection.js"
import ButterflyModel from "./models/ButterflyModel.js"


export const app = express();

app.get("/", (req, res) => {
  res.send("Hello Api!");
});

app.use(express.json());
app.use("/butterflies", butterflyRouter);

try {
    await db_connection.authenticate()
    console.log('conected to database:cat::rocket:')
    await ButterflyModel.sync({})
    console.log('models syncronised✔')
} catch (error) {
    console.log(`error: ${error}`)
}

export const server = app.listen(8000, () => {
  console.log("🚀server up in http://localhost:8000/butterflies");
});
