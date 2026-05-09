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

export type SkillItem = {
    name: string;
    level?: string;
}

export type SkillsCategory = {
    name: string;
    items: (string | SkillItem)[];
}

export type Section =
    | { type: 'work_experience'; title: string; entries: WorkEntry[] }
    | { type: 'education';       title: string; entries: EducationEntry[] }
    | { type: 'skills';          title: string; categories: SkillsCategory[]; displayFormat?: 'comma' | 'list' }
