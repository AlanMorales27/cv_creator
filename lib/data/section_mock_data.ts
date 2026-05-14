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

const EDUCATION_MOCK: SectionItem = {
    id: nanoid(),
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
}

const PROJECTS_MOCK = {
    type: "projects",
    title: "Projects",
    entries: [
        {
            name: "Personal Portfolio Website",
            link: "https://github.com/johndoe/portfolio",
            description: ["Developed a personal portfolio website using React and Node.js", "Implemented a responsive design with modern UI/UX principles", "Integrated with GitHub API to display latest projects and contributions"]
        }
    ]
}

const CERTIFICATIONS_MOCK = {
    type: "certifications",
    title: "Certifications",
    entries: [
        {
            name: "Certified Kubernetes Administrator (CKA)",
            issuingOrganization: "Cloud Native Computing Foundation",
            dateObtained: "2024-06-01",
            link: "https://www.credly.com/badges/d1e2c3b4-a5b6-c7d8-e9f0-1234567890ab",
            description: ["Validated expertise in Kubernetes installation, configuration, and management", "Demonstrated practical skills in container orchestration and cluster administration"]
        }
    ]
}