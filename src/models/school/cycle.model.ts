import { prop } from "@typegoose/typegoose";
import { Subject } from "./subject.model";

export class Cycle {
	@prop()
	number: number;

	@prop({ required: true, type: () => [Subject] })
	subjects: Subject[];
}
