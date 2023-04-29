import { prop, getModelForClass } from "@typegoose/typegoose";
import { Message } from "./message.model";

export class Chat {
	@prop({ required: true })
	phone: string;

	@prop({ type: () => [Message] })
	messages: Message[];
}

const ChatModel = getModelForClass(Chat);

export default ChatModel;
