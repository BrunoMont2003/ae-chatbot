import { prop, getModelForClass } from "@typegoose/typegoose";
import { Period } from "./period.model";

export class School {
	@prop()
	name?: string;

	@prop()
	slug?: string;

	@prop()
	information?: string;

	@prop({ required: true, type: () => [Period] })
	periods: Period[];
}

const SchoolModel = getModelForClass(School);
export default SchoolModel;
