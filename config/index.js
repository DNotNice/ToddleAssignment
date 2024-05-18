import { PORT , SALT , JWT_SECRET, JWT_EXPIRY ,BUCKET_NAME,BUCKET_REGION,ACCESS_KEY,SECRET_ACCESS_KEY} from "./server-config.js";
import { prisma } from "./dbConfig.js";
import { FileConfig } from "./fileConfig.js";
export {PORT , prisma , SALT , JWT_SECRET , JWT_EXPIRY ,BUCKET_NAME,BUCKET_REGION,ACCESS_KEY,SECRET_ACCESS_KEY , FileConfig}