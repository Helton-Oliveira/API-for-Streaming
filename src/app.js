import express from "express";
import connectToDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conection = await connectToDataBase();
const app = express();

conection.on("error", (error) => {
    console.log("Erro de conexão");
})

conection.once("open", () => {
    console.log("Conexão bem sucedida!")
})

routes(app);


export default app;