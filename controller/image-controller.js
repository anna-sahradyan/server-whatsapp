import mongoose from "mongoose";
import grid from "gridfs-stream";
//?uploadFile
let gfs, gridFsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "fs"
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection("fs");
})
export const uploadFile = async (req, res) => {
    if (!req.file) {
        return res.status(404).json("File not found");
    }
    const imgUrl = `${process.env.URL}/file/${req.file.filename}`;
    return res.status(200).json(imgUrl);
};
export const getImage = async (req, res) => {
    try {
        const file = await gfs.files.findOne({filename: req.params.filename});
        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res);

    } catch (err) {
        return res.status(500).json(err);
    }

}
