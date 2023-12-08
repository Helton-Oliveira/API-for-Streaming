import express from "express";
import videoControllers from "../controllers/videoController.js";

const routes = express.Router();

routes.get("/videos", videoControllers.showVideos);
routes.get("/videos/:id", videoControllers.searchVideoById);
routes.post("/videos/", videoControllers.createVideo);

export default routes;