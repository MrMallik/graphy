import { insertNameAndEmail, viewData } from "./utils/crud";
import { generateData } from "./utils/dataGenerator";
import DatabaseConnection from "./db";
import express from 'express';
import logger from "./logger";

const app = express();
const port = 9156;

//TODO: setup prod environment, for now doing on local env
const env = 'localhost';

app.get("/test", (req, res) => {
    const db1 = DatabaseConnection.getDB();
    const db2 = DatabaseConnection.getDB();
    return res.send(`db1 === db2 :: ${db1 === db2}`);
});

app.get("/gn", (_, res) => {
    return res.json({
        people: generateData()
    });
});

//insert people
app.post("/ip", (_, res) => {
    try {
        insertNameAndEmail();
        return res.sendStatus(200);
    } catch (err) {
        logger.error('An error occurred when inserting name and email');
        return res.sendStatus(500);
    }
});

//get all people
app.get("/gap", async (_, res) => {
    try {
        return res.json({
            people: await viewData()
        });
    } catch (err) {
        return res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`Server running on ${env}:${port}`);
});

