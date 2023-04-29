import { prop } from "@typegoose/typegoose";
import { Cycle } from "./cycle.model";

export class Period {
	@prop()
	year: string;

	@prop()
	start: Date;

	@prop()
	end: Date;

	@prop()
	semester: number;

	@prop({ required: true, type: () => [Cycle] })
	cycles: Cycle[];
}
