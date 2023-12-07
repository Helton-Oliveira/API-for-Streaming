import express from "express";
import video from "./videosRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("API AluraFlix");
    });

    app.use(express.json(), video);
}

export default routes;