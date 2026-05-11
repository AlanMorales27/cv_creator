import useCvStore from "@/lib/store/cvStore"
import { joinLines, splitLines } from "@/lib/utils"
import { ExperienceEntry, ExperienceItem } from "@/lib/schemas/ExperienceItemSchema"

import FormField from "./FormField"
import FormTextarea from "./FormTextarea"

import { useEffect } from "react"
import { useFieldArray, useForm } from "react-hook-form"

interface WorkExperienceFormProps { section: ExperienceItem }

type ExperienceFormEntry = Omit<ExperienceEntry, 'description'> & { description?: string }
type ExperienceFormValues = { entries: ExperienceFormEntry[] }

function toFormEntries(entries: ExperienceEntry[]): ExperienceFormEntry[] {
    return entries.map(e => ({ ...e, description: joinLines(e.description) }))
}

function toSchemaEntries(entries: ExperienceFormEntry[]): ExperienceEntry[] {
    return entries.map(e => ({ ...e, description: splitLines(e.description) }))
}

export default function WorkExperienceForm({ section }: WorkExperienceFormProps) {

    const updateSection = useCvStore((state) => state.updateSection)

    const { register, watch, control } = useForm<ExperienceFormValues>({
        defaultValues: { entries: toFormEntries(section.entries) }
    })

    const { fields } = useFieldArray({ control, name: 'entries' })

    useEffect(() => {
        const subscription = watch((data) => {
            updateSection(section.id, {
                ...section,
                entries: toSchemaEntries((data.entries ?? []) as ExperienceFormEntry[])
            })
        })
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <FormField
                        label="Cargo"
                        {...register(`entries.${index}.role`)}
                    />
                    <FormField
                        label="Empresa"
                        {...register(`entries.${index}.company`)}
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
