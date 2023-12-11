import video from "../models/Video.js";

class videoControllers {

    static async showVideos(req, res) {
        try {
           const videos = await video.find({}); 
           res.status(200).json(videos);
        } catch(error) {
            res.status(500).json({message: `${error.message}`});
        }
    }

    static async searchVideoById(req, res) {
        try {
            const id = req.params.id;
            res.status(200).json(await video.findById(id));
        } catch(error) {
            res.status(500).json({message: `Video não encontrado.`});
        }
    }

    static async createVideo(req, res) {
        try {
            res.status(200).json(await video.create(req.body));
        } catch(error) {
            res.status(500).json({message: `Impossível criar video!`});
        }
    }

    static async updateData(req, res) {
        try {
            await video.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json(await video.findById(req.params.id));
        } catch(error) {
            res.status(500).json({message: `Video não encontrado.`});
        }
    }

    static async deleteData(req, res) {
        try {
            await video.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Video deletado com sucesso!" });
        } catch(error) {
            res.status(500).json({message: `Video não encontrado.`});
        }
    }

}


export default videoControllers;

