import express from "express";
import {addUser, getUsers } from "../controller/add-controller.js";
import {newConversation,getConversation} from "../controller/conversation-controller.js";
import {getMessage, newMessage} from "../controller/message-controller.js";
import {uploadFile,getImage} from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();
//?add-controller
router.route("/add").post( addUser);
router.route("/users").get(getUsers);

//?conversation-controller
router.route("/conversation/add").post(newConversation);
router.route("/conversation/get").post(getConversation);

//?message-controller
router.route("/message/add").post(newMessage);
router.route("/message/get/:id").get(getMessage);

//?image-controller
router.route("/file/upload").post(upload.single("file"), uploadFile);
router.route("/file/:filename").get( getImage);

export default router;