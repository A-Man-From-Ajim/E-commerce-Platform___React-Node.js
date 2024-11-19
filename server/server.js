const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
});

app.get("/api/products", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM products");
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.get("/api/products/:id", async (req, res) => {
	const productId = req.params.id;
	try {
		const result = await pool.query(
			`SELECT * FROM products WHERE id = ${productId}`
		);
		if (result.rows.length > 0) {
			res.json(result.rows[0]);
		} else {
			res.status(404).json({ error: "Product not found" });
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.listen(5000, () => {
	console.log("Server is running on port 5000");
});
