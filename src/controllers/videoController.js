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

}


export default videoControllers;

