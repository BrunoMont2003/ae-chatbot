import "dotenv/config";
import express, { Express } from "express";
import compression from "compression";

import { loadRoutes } from "./routes";
import morgan from "morgan";
import * as AppMiddlewares from "./middlewares/app";
import seed from "./seed";
import config from "./config/general.configs";
import cors from "cors";

const app: Express = express();

//App Middlewares (for all routes)


app.use(
	cors(),
	compression(),
	AppMiddlewares.helmetOptions,
	express.json(),
	express.urlencoded({ extended: true })
);

//extended logger in dev EXECUTION RUNTIME
if (process.env.NODE_ENV !== "prod") {
	app.use(morgan("dev"));
}

//load routes
loadRoutes(app);

// seed data
if (config.seed) seed();


export { app };
