/**
 * 
 * @param {Error} error 
 */
export const catchLogger = (error)=>{
    if(process.env.NODE_ENV === "developement") console.log(error)
}