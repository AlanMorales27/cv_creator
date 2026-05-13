import z from "zod";

export const ExperienceEntrySchema = z.object({
    role:         z.string(),
    company:      z.string(),
    location:     z.string().optional(),
    startDate:    z.iso.date().optional(),
    endDate:      z.iso.date().optional(),
    description:  z.array(z.string()).optional(),
})

export const ExperienceItemSchema = z.object({
    id:           z.number(),
    type:         z.literal('work_experience'),
    title:        z.string().optional(),
    entries:      z.array(ExperienceEntrySchema)
})

export type ExperienceEntry = z.infer<typeof ExperienceEntrySchema>
export type ExperienceItem = z.infer<typeof ExperienceItemSchema>