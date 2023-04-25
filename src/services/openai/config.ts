import { Configuration, OpenAIApi } from "openai";
import config from "../../config/general.configs";

const configuration = new Configuration({
	apiKey: config.external.openai.apiKey,
});

export const openai = new OpenAIApi(configuration);
