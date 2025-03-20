import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence"; // for id like 1 2 3 

const connection = mongoose.connection; // Get Mongoose connection

const urlSchema = new mongoose.Schema(
  {
    _id: Number, // Make `_id` a Number for auto-increment
    url: { 
      type: String, 
      required: true 
    },
    shortCode: { 
      type: String, 
      unique: true, 
      required: true 
    },
    accessCount:{
        type:Number
    }
  },
  { 
    timestamps: true, 
    _id: false // Disable default `_id` so we can use auto-increment
  }
);

// Apply Auto-Increment Plugin
urlSchema.plugin(AutoIncrement(connection), { id: "url_counter", inc_field: "_id" });

const URL = mongoose.model("URL", urlSchema);

export default URL;
