import DatabaseConnection from "./db";
import { greeting } from "./greetings";
import express from 'express';

const app = express();
const port = 9156;

//TODO: setup prod environment, for now doing on local env
const env = 'localhost';

app.get("/test", (req, res) => {
    const db1 = DatabaseConnection.getDB();
    const db2 = DatabaseConnection.getDB();
    return res.send(`db1 === db2 :: ${db1 === db2}`);
});

app.listen(port, () => {
    console.log(`Server running on ${env}:${port}`);
});

