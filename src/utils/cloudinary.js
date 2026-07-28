import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded on cloudinary. File src: " + response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log("CLOUDINARY UPLOAD ERROR:", error);
    try {
      fs.unlinkSync(localFilePath);
    } catch (unlinkError) {
      console.log("Error deleting local file:", unlinkError);
    }
    return null;
  }
};

export { uploadOnCloudinary };
