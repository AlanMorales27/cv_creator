import z from "zod";

export const EducationEntrySchema = z.object({
    degree:       z.string(),
    institution:  z.string(),
    location:     z.string().optional(),
    startDate:    z.iso.date().optional(),
    endDate:      z.iso.date().optional(),
    description:  z.array(z.string()).optional(),
})

export const EducationItemSchema = z.object({
    id:           z.string(),
    type:         z.literal('education'),
    title:        z.string().optional(),
    entries:      z.array(EducationEntrySchema)
})

export type EducationEntry = z.infer<typeof EducationEntrySchema>
export type EducationItem  = z.infer<typeof EducationItemSchema>
