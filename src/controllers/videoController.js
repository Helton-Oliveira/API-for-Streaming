import  video  from "../models/index.js";
import NotFound from "../errors/NotFound.js";
import BaseError from "../errors/BaseError.js";

class videoControllers {

    static async showVideos(req, res, next) {
        try {
           const videosList = await video.find({}); 
           res.status(200).json(videosList);
        } catch(error) {
            next(error);
        }
    }

    static async searchVideoById(req, res, next) {
        try {
            const id = req.params.id;
            const videoFound = await video.findById(id);

            if(videoFound !== null){
                res.status(200).json(videoFound);
            } else {
                next(new NotFound("Id não encontrado!"));
            }

        } catch(error) {
            next(error);
        }
    }

    static async createVideo(req, res, next) {
        try {
            res.status(200).json(await video.create(req.body));
        } catch(error) {
            next(error);
        }
    }

    static async updateData(req, res, next) {
        try {
            const id = req.params.id ;
            const update = await video.findByIdAndUpdate(id, req.body);

            let { title, description, url } = req.body;

            if(update !== null) {
                if(title === "" || description === "" || url === "") {
                    next(new BaseError("Unauthorized", 401).sendReply(res));
                } else {
                    res.status(200).json(await video.findById(id));
                }
            } else {
                next(new NotFound("ID não encontrado"));
            }

        } catch(error) {
            next(error);
        }
    }

    static async deleteData(req, res, next) {
        try {
            const deleteData = await video.findByIdAndDelete(req.params.id);

            if(deleteData !== null){
                res.status(200).json({ message: "Video deletado com sucesso!" });
            } else {
                next(new NotFound("ID não encontrado!"));
            }

        } catch(error) {
            next(error);
        }
    }

}


export default videoControllers;

