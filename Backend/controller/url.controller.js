import URL from "../model/urlmodel.js";
import { nanoid } from "nanoid";

// this is controller for creating a short url route
export const createShortUrl = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ error: "URL is required" });
        }
        const shortCode = nanoid(6);
        // Create and save the new URL document
        const newUrl = new URL({ url, shortCode });
        await newUrl.save();
        //how response should
        const responseData = {
            id: newUrl._id, // Numeric auto-incremented ID
            url: newUrl.url,
            shortCode: newUrl.shortCode,
            createdAt: newUrl.createdAt.toISOString(),
            updatedAt: newUrl.updatedAt.toISOString(),
        };

        res.status(201).json(responseData);
    } catch (error) {
        console.error("Error creating a short URL:", error);
        res.status(400).json({ error: "Bad Request" });
    }
};

//  for retrieving original url from shortcode
export const getOriginalUrl = async (req, res) => {
    try {
      const { shortCode } = req.params;
      // Find the url from db 
      const foundUrl = await URL.findOne({ shortCode });
      if (!foundUrl) {
        return res.status(404).json({ error: "url not found" });
      }
  
      return res.status(200).json({
        id: foundUrl.id,
        url: foundUrl.url,
        shortCode: foundUrl.shortCode,
        createdAt: foundUrl.createdAt,
        updatedAt: foundUrl.updatedAt,
      });
    } catch (error) {
      console.error("Error retrieving short URL:", error);
      return res.status(404).json({ error: "Internal Server Error" });
    }
  };
  
// update short code
export const updateShortUrl = async (req, res) => {
    try {
      const { shortCode } = req.params;
      const { url } = req.body;  
      // Find and update the url
      const updatedUrl = await URL.findOneAndUpdate(
        { shortCode },
        { url, updatedAt: new Date() },
        { new: true } // Return updated document
      );
      if (!updatedUrl) {
        return res.status(404).json({ error: "Short URL not found" });
      }
      return res.status(200).json({
        id: updatedUrl.id,
        url: updatedUrl.url,
        shortCode: updatedUrl.shortCode,
        createdAt: updatedUrl.createdAt,
        updatedAt: updatedUrl.updatedAt,
      });
    } catch (error) {
      console.error("Error updating short URL:", error);
      return res.status(400).json({ error: "Internal Server Error" });
    }
  };
  