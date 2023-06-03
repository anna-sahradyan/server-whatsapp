import express from "express";
import {addUser, getUsers} from "../controller/add-controller.js";
const router = express.Router();
router.route("/add").post( addUser);
router.route("/users").get(getUsers);


export default router;