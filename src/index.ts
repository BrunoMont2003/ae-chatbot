import { app } from "./app";
import config from "./config/general.configs";

//listen port
app.listen(config.api.port, () => {
	console.log(`Listening on port http://localhost:${config.api.port}`);
});
