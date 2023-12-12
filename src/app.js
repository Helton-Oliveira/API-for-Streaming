import express from "express";
import connectToDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import error404 from "./middlewares/error404.js";

const conection = await connectToDataBase();
const app = express();

conection.on("error", (error) => {
    console.log({ error: error `Erro de conexão` });
})

conection.once("open", () => {
    console.log("Conexão bem sucedida!")
})

routes(app);

app.use(error404);

app.use(errorHandler);


export default app;