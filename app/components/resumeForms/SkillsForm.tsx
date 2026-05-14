'use client'

import {
    SKILL_DISPLAY_FORMAT_LABELS,
    SKILL_DISPLAY_FORMAT_OPTIONS,
    SKILL_LEVEL_OPTIONS,
    SkillLevelItem,
    SkillsCategory,
    Skillsitem
} from "@/lib/schemas/SkillItemSchema"
import useCvStore from "@/lib/store/cvStore"
import FormField from "./FormField"
import FormSelect from "./FormSelect"
import SectionAccordionItem from "./SectionAccordionItem"
import { Control, UseFormRegister, useForm, useFieldArray } from "react-hook-form"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { NEW_SKILL_CATEGORY, NEW_SKILL_ITEM } from "@/lib/data/entry_mock_data"
import { X } from "lucide-react"

type FormSkillsCategory = Omit<SkillsCategory, 'items'> & { items: SkillLevelItem[] }
type FormSkillsitem     = Omit<Skillsitem, 'categories'> & { categories: FormSkillsCategory[] }

function toFormValues(section: Skillsitem): FormSkillsitem {
    return {
        ...section,
        categories: section.categories.map(cat => ({
            ...cat,
            items: cat.items.map(item =>
                typeof item === 'string' ? { name: item } : item
            )
        }))
    }
}

interface CategoryItemsProps {
    control: Control<FormSkillsitem>
    register: UseFormRegister<FormSkillsitem>
    categoryIndex: number
}

function CategoryItems({ control, register, categoryIndex }: CategoryItemsProps) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `categories.${categoryIndex}.items`,
    })

    return (
        <div className="space-y-2">
            {fields.map((item, itemIndex) => (
                <div key={item.id} className="flex flex-row gap-2 items-end">
                    <FormField
                        label="Skill"
                        type="text"
                        {...register(`categories.${categoryIndex}.items.${itemIndex}.name`)}
                    />
                    <FormSelect
                        label="Nivel"
                        name={`categories.${categoryIndex}.items.${itemIndex}.level`}
                        control={control}
                        options={SKILL_LEVEL_OPTIONS}
                        clearable
                        emptyLabel="Sin nivel"
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => remove(itemIndex)}
                        aria-label="Eliminar skill"
                    >
                        <X />
                    </Button>
                </div>
            ))}
            <Button type="button" variant="outline" onClick={() => append(NEW_SKILL_ITEM)}>
                Agregar skill
            </Button>
        </div>
    )
}

interface SkillsFormProps { section: Skillsitem }

export default function SkillsForm({ section }: SkillsFormProps) {

    const updateSection = useCvStore((state) => state.updateSection)

    const { register, watch, control } = useForm<FormSkillsitem>({
        defaultValues: toFormValues(section)
    })

    const { fields: categories, append, remove } = useFieldArray({ control, name: "categories" })

    useEffect(() => {
        const subscription = watch((data) => {
            updateSection(section.id, data as Skillsitem)
        })
        return () => subscription.unsubscribe()
    }, [watch, section.id, updateSection])

    const handleAddCategory = () => {
        append(NEW_SKILL_CATEGORY as FormSkillsCategory)
    }

    const handleRemoveCategory = (index: number) => { remove(index) }

    return (
        <div className="px-2 pt-2 border-t-2 space-y-4">
            <FormSelect
                label="Formato de visualización"
                name="displayFormat"
                control={control}
                options={SKILL_DISPLAY_FORMAT_OPTIONS}
                labels={SKILL_DISPLAY_FORMAT_LABELS}
            />
            {categories.map((category, index) => (
                <SectionAccordionItem
                    key={category.id}
                    value={category.id}
                    label={category.name || "Nueva categoría"}
                    onDelete={() => handleRemoveCategory(index)}
                >
                    <div className="p-4 border rounded-md space-y-4 mb-4 last:mb-0">
                        <FormField
                            label="Nombre de la categoría"
                            type="text"
                            {...register(`categories.${index}.name`)}
                        />
                        <CategoryItems
                            control={control}
                            register={register}
                            categoryIndex={index}
                        />
                    </div>
                </SectionAccordionItem>
            ))}
            <Button type="button" onClick={handleAddCategory}> Agregar categoría </Button>
        </div>
    )
}
