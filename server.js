import express from "express";
import knex from "knex";

import dbConfig from "./dbConfig.js";

const dbConnection = knex(dbConfig);
dbConnection.raw("SELECT 1+1 as result")
	.then(() => {
		console.log("Connection to database was successful.");
	})
	.catch((error) => {
		console.error("An error occurred while connecting to the database:", error);
	})
	.finally(() => {
		dbConnection.destroy();
	});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("data"));

app.get("/api", (req, res) => {
	res.send("API is running...");
});

app.listen(process.env.PORT, () => {
	console.log(`Expressjs REST api running in ${process.env.NODE_ENV} environment on port ${process.env.PORT}`);
});
