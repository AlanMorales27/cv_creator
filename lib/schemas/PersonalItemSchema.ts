import z from "zod";

export const PersonalItemSchema = z.object({
    firstNames:   z.string(),
    lastNames:    z.string(),
    title:        z.string(),
    location:     z.string(),
    postalCode:   z.string(),
    country:      z.string(),
    phoneNumber:  z.e164().optional(),
    email:        z.email().optional(),
    linkedIn:     z.url().optional(),
    gitHub:       z.url().optional(),
})

export type PersonalItem = z.infer<typeof PersonalItemSchema>
