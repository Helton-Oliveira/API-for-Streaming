import video from "../models/Video.js";
import NotFound from "../errors/NotFound.js";

class videoControllers {

    static async showVideos(req, res, next) {
        try {
           const videos = await video.find({}); 
           res.status(200).json(videos);
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
            const update = await video.findByIdAndUpdate(id, body);

            if(update !== null && id !== null) {
                res.status(200).json(await video.findById(id));
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

