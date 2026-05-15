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
import { Control, UseFormRegister, useForm, useFieldArray } from "react-hook-form"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { NEW_SKILL_CATEGORY, NEW_SKILL_ITEM } from "@/lib/data/entry_mock_data"
import { X } from "lucide-react"
import { DraggableSection, DraggableRow } from "./DraggeableSections"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

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
    const { fields, append, remove, move } = useFieldArray({
        control,
        name: `categories.${categoryIndex}.items`,
    })

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (!over || active.id === over.id) return

        const oldIndex = fields.findIndex(f => f.id === active.id)
        const newIndex = fields.findIndex(f => f.id === over.id)
        move(oldIndex, newIndex)
    }

    return (
        <div className="space-y-2">
            <DndContext onDragEnd={handleDragEnd}>
                <SortableContext
                    items={fields.map(f => f.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {fields.map((item, itemIndex) => (
                        <DraggableRow
                            key={item.id}
                            id={item.id}
                            className="flex flex-row gap-2 items-end"
                        >
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
                        </DraggableRow>
                    ))}
                </SortableContext>
            </DndContext>
            <Button type="button" variant="outline" onClick={() => append(NEW_SKILL_ITEM)}>
                Agregar skill
            </Button>
        </div>
    )
}

interface SkillsFormProps {
    section: Skillsitem
    openValues?: string[]
}

export default function SkillsForm({ section, openValues = [] }: SkillsFormProps) {

    const updateSection = useCvStore((state) => state.updateSection)

    const { register, watch, control } = useForm<FormSkillsitem>({
        defaultValues: toFormValues(section)
    })

    const { fields: categories, append, remove, move } = useFieldArray({ control, name: "categories" })

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

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (!over || active.id === over.id) return

        const oldIndex = categories.findIndex(c => c.id === active.id)
        const newIndex = categories.findIndex(c => c.id === over.id)
        move(oldIndex, newIndex)
    }

    return (
        <div className="px-2 pt-2 border-t-2 space-y-4">
            <FormSelect
                label="Formato de visualización"
                name="displayFormat"
                control={control}
                options={SKILL_DISPLAY_FORMAT_OPTIONS}
                labels={SKILL_DISPLAY_FORMAT_LABELS}
            />
            <DndContext onDragEnd={handleDragEnd}>
                <SortableContext
                    items={categories.map(c => c.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {categories.map((category, index) => (
                        <DraggableSection
                            key={category.id}
                            value={category.id}
                            label={category.name || "Nueva categoría"}
                            disabled={openValues.includes(category.id)}
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
                        </DraggableSection>
                    ))}
                </SortableContext>
            </DndContext>
            <Button type="button" onClick={handleAddCategory}> Agregar categoría </Button>
        </div>
    )
}
