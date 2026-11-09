import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "cafe"
})

export default db;