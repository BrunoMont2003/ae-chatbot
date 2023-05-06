import { SchoolModel } from "../../models";

export const getSchool = async (schoolId: string) => {
    const school = await SchoolModel.findById(schoolId).select("-__v -_id -periods._id -periods.cycles._id -periods.cycles.subjects._id -periods.cycles.subjects.professor._id");
    return school;
}