import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({path: path.join(__dirname, ".env")});

const config = {
	client: process.env.DB_TYPE,
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_USER_PASSWORD,
		database: process.env.DB_NAME,
		port: process.env.DB_PORT,
		sslMode: "require"
	}
};

export default config;
