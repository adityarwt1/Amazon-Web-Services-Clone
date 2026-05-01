import mongoose from "mongoose";
import { catchLogger } from "../../logger/CatchErrorLog.js";

/**
 * @returns {Promise<boolean>}
 */
export async function mongoConnect() {
  try {
    // if already connected to mongodb
    const isAlreadyConnected = (await mongoose.connection.readyState) === 1;
    if (isAlreadyConnected) return true;
    const isConnected = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "AmazonWebServicesClone",
    });
    if (isConnected) {
      return true;
    } else return false;
  } catch (error) {
    catchLogger(error);
    return false;
  }
}
