import express from "express"
import {createShortUrl} from "../controller/url.controller.js"
const router=express.Router()

router.post("/shorten",createShortUrl) //this router create short url
export default router;