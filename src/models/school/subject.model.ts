import { prop } from "@typegoose/typegoose";

export class Subject {
	@prop()
	name: string;

	@prop()
	credits: number;

	@prop()
	professor?: {
		name: string;
		profession: string;
	};

	@prop()
	summary?: string;
}
