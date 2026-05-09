import z from "zod";

import { EducationItemSchema } from "./EducationItemSchema";
import { ExperienceItemSchema } from "./ExperienceItemSchema";
import { SkillsItemSchema } from "./SkillItemSchema";

export const SectionItemSchema = z.discriminatedUnion('type', [
    z.lazy(() => EducationItemSchema),
    z.lazy(() => ExperienceItemSchema),
    z.lazy(() => SkillsItemSchema)
])

export type SectionItem = z.infer<typeof SectionItemSchema>
