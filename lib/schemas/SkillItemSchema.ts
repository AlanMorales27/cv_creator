import { z } from 'zod';

export const SkillLevelItemSchema = z.object({
    name: z.string(),
    level: z.enum(
        ['Básico', 'Intermedio', 'Avanzado']
    ).optional()
})

export const SkillsCategorySchema = z.object({
    name: z.string(),
    items: z.array(
        z.union([z.string(), SkillLevelItemSchema])
    )
})

export const SkillsSectionSchema = z.object({
    type: z.literal('skills'),
    title: z.string().optional(),
    categories: z.array(SkillsCategorySchema),
    displayFormat: z.enum(["comma", 'list']).optional()
})

/**
 * Type definitions for the skill section
 */
export type SkillLevel = z.infer<typeof SkillLevelItemSchema.shape.level>;
export type SkillLevelItem = z.infer<typeof SkillLevelItemSchema>;

export type SkillsDisplayFormat = z.infer<
    typeof SkillsSectionSchema.shape.displayFormat
>;

export type SkillsCategory = z.infer<typeof SkillsCategorySchema>;
export type SkillsSection = z.infer<typeof SkillsSectionSchema>;

