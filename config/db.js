/*const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "nanoshel.cuzlniri5zxa.ap-south-1.rds.amazonaws.com",
  user: "root",
  password: "poiuytrewq",
  database: "test_candidate",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + db.threadId);
});

// API endpoints
app.post("/addStudent", (req, res) => {
  const { first_name, last_name, age, email, phone, address } = req.body;

  const query = `
    INSERT INTO students 
    (first_name, last_name, age, email, phone, address) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [first_name, last_name, age, email, phone, address],
    (err, results) => {
      if (err) throw err;
      res
        .status(201)
        .json({ message: "Student added successfully", id: results.insertId });
    }
  );
});

app.get("/viewStudents", (req, res) => {
  const query = "SELECT * FROM students";

  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(200).json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
*/
import { createPool } from "mysql2/promise";
import { parse } from "url";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

export async function query(sql, values) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql, values);
    return rows;
  } finally {
    connection.release();
  }
}
