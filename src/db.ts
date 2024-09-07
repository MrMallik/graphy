import sqlite3 from "sqlite3";
import logger from './logger';

export default class DatabaseConnection {
    //@ts-ignore
    private static db: sqlite3.Database;

    private constructor() {}

    static getDB(): sqlite3.Database {
        if (!this.db) {
            this.db = new sqlite3.Database('testdb', sqlite3.OPEN_READWRITE, (err) => {
                if (err) {
                    logger.error('An error has occurred when initializing DB!');
                }
            });
            logger.info('Created db instance');
        }
        return this.db;
    }
}