/* eslint-disable no-console */
import config from "./general.configs";
import mongoose from "mongoose";
const db = mongoose.connection;

db.on("connecting", () => {
	console.info("Connecting to MongoDB...🟨");
});

db.on("connected", () => {
	console.info("MongoDB connected!🟢");
});

db.on("disconnected", () => {
	console.info("MongoDB disconnected!🔴");
});

const connect = () => {
	try {
		mongoose.connect(config.mongo.uri);
	} catch (error) {
		console.error("Error connecting to MongoDB!🔴");
	}
};

export default connect;
