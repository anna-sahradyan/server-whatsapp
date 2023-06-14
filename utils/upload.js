import multer from "multer";
import {GridFsStorage} from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: process.env.MONGO_URL,
    options: { useUnifiedTopology:true, useNewUrlParser: true},
    file: (req, file) => {
        const match = ["image/png", "image/jpg",];
        if (match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-file-${file.originalname}`;
        }
        return {
            bucketName:"photos",
            filename:`${Date.now()}-file-${file.originalname}`
        }
    }
})
const upload = multer({ storage });
export default  upload;