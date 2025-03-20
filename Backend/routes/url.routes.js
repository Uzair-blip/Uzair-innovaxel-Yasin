import express from "express"
import {createShortUrl,getOriginalUrl,updateShortUrl,deleteShortUrl,getUrlStats} from "../controller/url.controller.js"
const router=express.Router()

router.post("/shorten",createShortUrl) //this router create short url
router.get("/shorten/:shortCode", getOriginalUrl);  // getting orignal url
router.put("/shorten/:shortCode", updateShortUrl); // Update short URL route
router.delete("/shorten/:shortCode", deleteShortUrl); // delete short URL route
router.get("/shorten/:shortCode/stats", getUrlStats); // for url stats

export default router;