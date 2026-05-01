import cors from 'cors'
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
export const corsFunction = (req, res, next)=>{
    cors({
        credentials:true,
        allowedHeaders:["Authorization", "x-aws-clone-auth"],
        methods:["POST", "GET", "PUT", "PATCH", "DELETE", "OPTIONS"],
        origin:["http://localhost:3000"],
    })
}