import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk"
import { BUCKET_NAME,BUCKET_REGION,ACCESS_KEY,SECRET_ACCESS_KEY } from "./server-config.js";

aws.config.update({
    region: 'ap-southeast-2',
    secretAccessKey:SECRET_ACCESS_KEY,
    accessKeyId:ACCESS_KEY
})
const s3 = new aws.S3;
const upload = multer({
    storage : multerS3({
        s3:s3,
        bucket : BUCKET_NAME,
        contentType:multerS3.AUTO_CONTENT_TYPE,
        acl : 'public-read',
        metadata :function(req ,file, cb){
            cb(null , {fieldname :file.fieldname})
        },
        key : function(req, file , cb){
            cb(null , Date.now().toString())
        }
    })
})
export {upload as FileConfig}


