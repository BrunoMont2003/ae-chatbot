import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats";
import { SendQuestionDTO } from "../dto/chat/send-question.dto";
const ajv = new Ajv();
addFormats(ajv);

const schema: JSONSchemaType<SendQuestionDTO> = {
	type: "object",
	properties: {
		question: { type: "string", maxLength: 1000 },
		phone: { type: "string", maxLength: 20 },
	},
	required: ["question", "phone"],
};

const validate = ajv.compile(schema);

export { validate };
