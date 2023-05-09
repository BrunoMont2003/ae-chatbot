import { Severity, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ options: {
	allowMixed: Severity.ALLOW
} })
export class Subject {
	@prop()
	name: string;

	@prop()
	credits: number;

	@prop()
	professor?: {
		name: string;
		profession?: string;
	};

	@prop()
	summary?: string;

	@prop()
	type?: 'obligatorio' | 'optativo' | 'especialidad';

	

}
