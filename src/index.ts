import { app } from "./app";
import connect from "./config/db.config";
import config from "./config/general.configs";

// connect to db
connect();

//listen port
app.listen(config.api.port, () => {
	console.log(`Listening on port http://localhost:${config.api.port}`);
});
