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
import { useForm, useFieldArray } from "react-hook-form"
import { useEffect } from "react"

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

interface SkillsFormProps { section: Skillsitem }

export default function SkillsForm({ section }: SkillsFormProps) {

    const updateSection = useCvStore((state) => state.updateSection)

    const { register, watch, control } = useForm<FormSkillsitem>({
        defaultValues: toFormValues(section)
    })

    const { fields: categories } = useFieldArray({ control, name: "categories" })

    useEffect(() => {
        const subscription = watch((data) => {
            updateSection(section.id, data as Skillsitem)
        })
        return () => subscription.unsubscribe()
    }, [watch, section.id, updateSection])

    return (
        <div className="space-y-4">
            <FormSelect
                label="Formato de visualización"
                name="displayFormat"
                control={control}
                options={SKILL_DISPLAY_FORMAT_OPTIONS}
                labels={SKILL_DISPLAY_FORMAT_LABELS}
            />
            {categories.map((category, index) => (
                <div key={category.id} className="p-4 border rounded-md">
                    <FormField
                        label="Nombre de la categoría"
                        type="text"
                        {...register(`categories.${index}.name`)}
                    />
                    {category.items.map((_item, itemIndex) => (
                        <div key={itemIndex} className="flex flex-row gap-2">
                            <FormField
                                label="Skill"
                                type="text"
                                {...register(`categories.${index}.items.${itemIndex}.name`)}
                            />
                            <FormSelect
                                label="Nivel"
                                name={`categories.${index}.items.${itemIndex}.level`}
                                control={control}
                                options={SKILL_LEVEL_OPTIONS}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
