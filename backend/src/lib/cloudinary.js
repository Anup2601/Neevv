import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env manually
dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("🔍 Checking .env values:");
console.log("✅ CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME || "Not Found");
console.log("✅ CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY || "Not Found");
console.log("✅ CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "Exists" : "Not Found");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

cloudinary.config({
    cloud_name: "du6yjwo1w",
    api_key: "633721869678465",
    api_secret: "3TKLIEae7EpoS67Vmg29m7HD6cI"
  });

export default cloudinary;
