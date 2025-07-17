import express from "express";
import { shortenUrl } from "../controllers/url.controller.js";

const urlRouter = express.Router();

urlRouter.get("/shorten", shortenUrl);

export default urlRouter;
