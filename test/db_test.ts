import DatabaseConnection from '../src/db';

const db1 = DatabaseConnection.getDB();
const db2 = DatabaseConnection.getDB();

console.log(`are the instances same :: ${db1 === db2}`);