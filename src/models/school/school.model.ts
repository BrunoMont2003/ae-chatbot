import { prop, getModelForClass } from "@typegoose/typegoose";
import { Period } from "./period.model";
import { Faq } from "./faq.model";

export class School {
	@prop()
	name?: string;

	@prop()
	slug?: string;

	@prop()
	information?: string;

	@prop({ required: true, type: () => [Period] })
	periods: Period[];

	@prop({ type: () => [Faq] })
	faqs?: Faq[];
}

const SchoolModel = getModelForClass(School);
export default SchoolModel;
