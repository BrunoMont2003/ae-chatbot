import { prop } from "@typegoose/typegoose";

export class Faq {
    @prop()
    question?: string;

    @prop()
    answer?: string;
}