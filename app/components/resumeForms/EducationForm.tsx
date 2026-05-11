import useCvStore from "@/lib/store/cvStore"
import { joinLines, splitLines } from "@/lib/utils"
import { EducationEntry, EducationItem } from "@/lib/schemas/EducationItemSchema"

import FormField from "./FormField"
import FormTextarea from "./FormTextarea"

import { useEffect } from "react"
import { useFieldArray, useForm } from "react-hook-form"

interface EducationFormProps { section: EducationItem }

type EducationFormEntry = Omit<EducationEntry, 'description'> & { description?: string }
type EducationFormValues = { entries: EducationFormEntry[] }

function toFormEntries(entries: EducationEntry[]): EducationFormEntry[] {
    return entries.map(e => ({ ...e, description: joinLines(e.description) }))
}

function toSchemaEntries(entries: EducationFormEntry[]): EducationEntry[] {
    return entries.map(e => ({ ...e, description: splitLines(e.description) }))
}

export default function EducationForm({ section }: EducationFormProps) {

    const updateSection = useCvStore((state) => state.updateSection)

    const { register, watch, control } = useForm<EducationFormValues>({
        defaultValues: { entries: toFormEntries(section.entries) }
    })

    const { fields } = useFieldArray({ control, name: 'entries' })

    useEffect(() => {
        const subscription = watch((data) => {
            updateSection(section.id, {
                ...section,
                entries: toSchemaEntries((data.entries ?? []) as EducationFormEntry[])
            })
        })
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <FormField
                        label="Título"
                        {...register(`entries.${index}.degree`)}
                    />
                    <FormField
                        label="Institución"
                        {...register(`entries.${index}.institution`)}
                    />
                    <FormField
                        label="Ubicación"
                        {...register(`entries.${index}.location`)}
                    />
                    <FormField
                        label="Fecha de inicio"
                        {...register(`entries.${index}.startDate`)}
                    />
                    <FormField
                        label="Fecha de fin"
                        {...register(`entries.${index}.endDate`)}
                    />
                    <FormTextarea
                        label="Descripción"
                        {...register(`entries.${index}.description`)}
                    />
                </div>
            ))}
        </>
    )
}
