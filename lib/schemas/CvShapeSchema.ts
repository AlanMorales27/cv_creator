import z from "zod";
import { PersonalItemSchema } from "./PersonalItemSchema";
import { SectionItemSchema } from "./SectionItemSchema";

export const CvShapeSchema = z.object({
    personalInfo: PersonalItemSchema,
    summary:      z.string().optional(),
    sections:     z.array(SectionItemSchema)
})

export type CvShape = z.infer<typeof CvShapeSchema>