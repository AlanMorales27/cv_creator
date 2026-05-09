import { SkillsSection } from "@/lib/schemas/SkillItemSchema";

export type WorkEntry = {
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
}

export type EducationEntry = {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
}

export type Section =
    | { type: 'work_experience'; title: string; entries: WorkEntry[] }
    | { type: 'education'; title: string; entries: EducationEntry[] }
    | SkillsSection;
