/**
 * 
 * @param {any} argument 
 * @returns {void}
 */
export const developementLogger = (argument)=>{
    if(process.env.NODE_ENV === "developement") console.log(argument)
}