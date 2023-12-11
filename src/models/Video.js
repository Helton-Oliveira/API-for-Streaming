import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true, minlength: 3 },
    description: { type: String, required: true, minlength: 1, maxlength: 5000 },
    url: { type: String, match: /^(https?|ftp):\/\/(?:www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\/[^/]+)*\/?$/ ,required: true },
    // image: {type: }
}, {versionKey: false});

const video = mongoose.model("Videos", videoSchema);

export default video;