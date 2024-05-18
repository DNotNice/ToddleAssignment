import "dotenv/config";
const PORT =  process.env.PORT
const SALT = process.env.SALT
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRY = process.env.JWT_EXPIRY
const BUCKET_NAME = process.env.BUCKET_NAME
const ACCESS_KEY = process.env.ACCESS_KEY
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY
const BUCKET_REGION = process.env.BUCKET_REGION
export {PORT , SALT , JWT_SECRET , JWT_EXPIRY , BUCKET_NAME,ACCESS_KEY,SECRET_ACCESS_KEY,BUCKET_REGION}