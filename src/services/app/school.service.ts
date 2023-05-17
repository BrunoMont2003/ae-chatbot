import { SchoolModel } from "../../models";

const getSchoolBySlug = async ({ slug }: { slug: string }) => {
    const school = await SchoolModel.findOne({
        slug
    }).select("-__v -_id -periods._id -periods.cycles._id -periods.cycles.subjects._id -periods.cycles.subjects.professor._id -slug -faqs");
    return school;
}
const getSchoolFaqs = async ({ slug }: { slug: string }) => {
    const school = await SchoolModel.findOne({
        slug
    }).select("-__v -_id -periods -faqs._id");
    return school;
}

const getCycleData = async ({ slug, cycle }: { slug: string, cycle: number }) => {
    const school = await SchoolModel.findOne({
        slug,
        "periods.cycles.number": cycle
    }).select("-__v -_id -periods._id -periods.cycles._id -periods.cycles.subjects._id -periods.cycles.subjects.professor._id -slug -faqs._id");

    return school;
}

export default {
    getSchoolBySlug,
    getSchoolFaqs,
    getCycleData
}