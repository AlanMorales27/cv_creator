import { SectionItem } from "@/lib/schemas";
import { nanoid } from "nanoid";

export const buildWorkExperienceMock = (): SectionItem => ({
    id: nanoid(10),
    type: "work_experience",
    title: "Work Experience",
    entries: [
        {
            role: "Software Engineer",
            company: "Stripe",
            location: "San Francisco, CA",
            startDate: "2021-06-01",
            endDate: "2023-12-31",
            description: [
                "Built and owned the idempotency framework powering 100% of public API write endpoints",
                "Reduced payment retry false-positives by 47% by introducing a probabilistic deduplication strategy",
                "Partnered with the Risk team to launch a real-time fraud signal pipeline processing 8B events/day",
                "Improved deploy safety by adding automated canary analysis, cutting rollback rate by 60%",
                "Onboarded and ramped up 8 new hires as part of the engineering bootcamp curriculum"
            ]
        }
    ]
})

export const buildEducationMock = (): SectionItem => ({
    id: nanoid(10),
    type: "education",
    title: "Education",
    entries: [
        {
            institution: "Stanford University",
            degree: "Bachelor of Science in Computer Science",
            location: "Stanford, CA",
            startDate: "2020-09-01",
            endDate: "2024-06-01",
            description: ["GPA: 3.9", "Relevant Coursework: Algorithms, Data Structures, Machine Learning"]
        }
    ]
})

export const buildSkillsMock = (): SectionItem => ({
    id: nanoid(10),
    type: "skills",
    title: "Skills",
    displayFormat: "list",
    categories: [
        {
            name: "Lenguajes",
            items: [
                { name: "TypeScript", level: "Avanzado" },
                { name: "Python", level: "Intermedio" }
            ]
        }
    ]
})
