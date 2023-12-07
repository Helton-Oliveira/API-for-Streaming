import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, require: true },
    drescription: { type: String },
    url: { type: String, require: true },
    // image: {type: }
}, {versionKey: false});

const video = mongoose.model("Videos", videoSchema);

export default video;