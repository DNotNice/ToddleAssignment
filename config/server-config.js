import "dotenv/config";
const PORT =  process.env.PORT
const SALT = process.env.SALT
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRY = process.env.JWT_EXPIRY
export {PORT , SALT , JWT_SECRET , JWT_EXPIRY}