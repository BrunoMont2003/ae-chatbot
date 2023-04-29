import { prop } from "@typegoose/typegoose";
export class Message {
	@prop()
	createdAt?: Date;

	@prop()
	question?: string;

	@prop()
	answer?: string;
}
