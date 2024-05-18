class AppError extends Error{
    constructor(message , statusCode){
        super(message)
        this.statusCode = statusCode;
        this.explanation = message
    }
}

const ErrorResp = {
    success: false,
    message: "Something Went Wrong",
    data: {},
    error: {}
}

const SuccessResp = {
    success:true , 
    message : "Successfully completed the request",
    data :{},
    error :{}
}
export {AppError , ErrorResp , SuccessResp}
