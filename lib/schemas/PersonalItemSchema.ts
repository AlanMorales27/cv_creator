import z from "zod";

export const PersonalItemSchema = z.object({
    name:         z.string(),
    title:        z.string(),
    roleFirst:    z.boolean().optional(), // <= Whether to display the professional title before the name
    photo:        z.string().optional(),  // <= Photo as base64 for canvas rendering
    photoName:    z.string().optional(),
    location:     z.string(),
    postalCode:   z.string(),
    country:      z.string(),
    phoneNumber:  z.string().optional(),
    email:        z.string().optional(),
    linkedIn:     z.url().optional(),
    gitHub:       z.url().optional(),
})

export type PersonalItem = z.infer<typeof PersonalItemSchema>
