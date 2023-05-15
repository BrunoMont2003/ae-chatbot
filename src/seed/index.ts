import schools from "./data/schools";
import { SchoolModel } from "../models";


export default async () => {
    try {
        await SchoolModel.deleteMany({});
        await SchoolModel.insertMany(schools);
        console.log("Schools seeded successfully");
    } catch (error) {
        console.log(error);
    }
}
