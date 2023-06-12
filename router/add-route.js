import express from "express";
import {addUser, getUsers } from "../controller/add-controller.js";
import {newConversation,getConversation} from "../controller/conversation-controller.js";
import {getMessage, newMessage} from "../controller/message-controller.js";
const router = express.Router();
router.route("/add").post( addUser);
router.route("/conversation/add").post(newConversation);
router.route("/conversation/get").post(getConversation);
router.route("/message/add").post(newMessage);
router.route("/message/get/:id").get(getMessage);
router.route("/users").get(getUsers);


export default router;