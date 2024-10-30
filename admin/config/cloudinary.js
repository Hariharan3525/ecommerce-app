import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: import.meta.env.VITE_CLOUDINARY_NAME,
        api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
        api_secret: import.meta.env.VITE_CLOUDINARY_SECRET_KEY,
    });
};

export default connectCloudinary;
