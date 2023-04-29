import { prop, Ref, getModelForClass } from "@typegoose/typegoose";
import { School } from "../school/school.model";

export class AdminUser {
	@prop({ required: true })
	name: string;

	@prop({ required: true })
	email: string;

	@prop({ required: true })
	password: string;

	@prop({ ref: () => School })
	school: Ref<School>;
}

const AdminUserModel = getModelForClass(AdminUser);

export default AdminUserModel;
