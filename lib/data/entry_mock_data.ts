import { EducationEntry, ExperienceEntry, SkillsCategory } from "../schemas";

export const NEW_EDUCATION_ENTRY: EducationEntry= {
    degree:       "Nueva Educación",
    institution:  "",
    location:     "",
    startDate:    "",
    endDate:      "",
    description:  [],
}

export const NEW_WORK_ENTRY: ExperienceEntry = {
    role:        "Nuevo Cargo",
    company:     "",
    location:    "",
    startDate:   "",
    endDate:     "",
    description: [],
}

export const NEW_SKILL_CATEGORY: SkillsCategory = {
    name:  "Nueva categoría",
    items: [{ name: "" }],
}