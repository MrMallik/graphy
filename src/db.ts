import sqlite3 from "sqlite3";
import logger from "./logger";
import { fileURLToPath } from "url";
import { dirname } from "path";

export default class DatabaseConnection {
  //@ts-ignore
  private static db: sqlite3.Database;

  private constructor() {}

  static getDB(): sqlite3.Database {
    if (!this.db) {
      const currentDir = dirname(fileURLToPath(import.meta.url));
      //TODO: For now file has to be created beforehand running this. Sqlite3 cannot create file if it doesn't exist. Check it later
      this.db = new sqlite3.Database(
        `${currentDir}/testdb.db`,
        (err) => {
          console.log(`err: ${JSON.stringify(err)}`);
          if (err) {
            logger.error("An error has occurred when initializing DB!");
          }
        }
      );
      logger.info("Created db instance");
    }
    console.log(`db: ${JSON.stringify(this.db)}`);
    return this.db;
  }
}
