import z from "zod";

export const PersonalItemSchema = z.object({
    firstNames:   z.string(),
    lastNames:    z.string(),
    // Photo as base64 for canvas rendering
    photo:        z.string().optional(),
    title:        z.string(),
    location:     z.string(),
    postalCode:   z.string(),
    country:      z.string(),
    phoneNumber:  z.string().optional(),
    email:        z.string().optional(),
    linkedIn:     z.url().optional(),
    gitHub:       z.url().optional(),
})

export type PersonalItem = z.infer<typeof PersonalItemSchema>
