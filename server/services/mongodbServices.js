import { mongoConnect } from "../lib/database/mondoDb.js";
import { developementLogger } from "../logger/developementLogger.js";
import { servicesUnableError } from "../constants/error.js";
import { catchLogger } from "../logger/CatchErrorLog.js";
export class MongoDbSevices {
  async mongoConnect() {
    const isConnected = await mongoConnect();
    if (isConnected) {
      // developementLogger("Connected To Database!");
      return true;
    } else return false;
  }

  // connect at middleware
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async middlewareConnect(req, res, next) {
    try {
      const isConnected = await this.mongoConnect();
      if (!isConnected) {
        return res.status(503).json({
          error: servicesUnableError,
        });
      }
      developementLogger("Connected to database in middleware!")
      next();
    } catch (error) {
      catchLogger(error);
      return res.status(503).json({
        error: servicesUnableError,
      });
    }
  }
}
