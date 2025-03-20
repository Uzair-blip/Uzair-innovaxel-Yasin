import express from "express"
import {createShortUrl,getOriginalUrl} from "../controller/url.controller.js"
const router=express.Router()

router.post("/shorten",createShortUrl) //this router create short url
router.get("/shorten/:shortCode", getOriginalUrl);  // getting orignal url
export default router;