import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { 
        type: String, 
        required: [true, "O Título é obrigatório!"] 
    },
    description: { 
        type: String, 
        required: [true, "O campo descrição é obrigatório!"]
    },
    url: { 
        type: String, 
        required: [true, "O campo URL é obrigatório!"],
        match: /^(https?|ftp):\/\/(?:www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\/[^/]+)*\/?$/ , 
    },
    // image: {type: }
}, {versionKey: false});

const video = mongoose.model("Videos", videoSchema);

export default video;