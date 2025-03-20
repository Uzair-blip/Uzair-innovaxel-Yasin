import URL from "../model/urlmodel.js";
import { nanoid } from "nanoid";

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
        res.status(500).json({ error: "server error" });
    }
};
