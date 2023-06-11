import express from "express";
import {addUser, getUsers } from "../controller/add-controller.js";
import {newConversation,getConversation} from "../controller/conversation-controller.js";
const router = express.Router();
router.route("/add").post( addUser);
router.route("/conversation/add").post(newConversation);
router.route("/conversation/get").post(getConversation);
router.route("/users").get(getUsers);


export default router;