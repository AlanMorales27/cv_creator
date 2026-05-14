import useCvStore from "@/lib/store/cvStore"
import { joinLines, splitLines } from "@/lib/helpers/utils"
import { EducationEntry, EducationItem } from "@/lib/schemas/EducationItemSchema"
import { ExperienceEntry, ExperienceItem } from "@/lib/schemas/ExperienceItemSchema"

import FormField from "./FormField"
import FormTextarea from "./FormTextarea"

import { useEffect } from "react"
import { useFieldArray, useForm } from "react-hook-form"

type FormEntry = Omit<EducationEntry & ExperienceEntry, 'description'> & { description?: string }

type SupportedSection = EducationItem | ExperienceItem
type FormValues = { entries: FormEntry[] }

const UNIQUE_FIELDS: Record<
    SupportedSection['type'],
    Array<{ label: string; name: keyof FormEntry }>
> = {
    education: [
        { label: 'Título', name: 'degree' },
        { label: 'Institución', name: 'institution' }]
    ,
    work_experience: [
        { label: 'Cargo', name: 'role' },
        { label: 'Empresa', name: 'company' }],
}

/**
 * Convert entries to form entries saved in the state to show then in the form 
 * using the nomenclature assigned to represent the line jumps of the description
 * 
 * @param entries - Array of education or work experience entries
 * @returns Array of form entries
 */
function toFormEntries(entries: SupportedSection['entries']): FormEntry[] {
    return (entries as FormEntry[]).map(e => ({
        ...e,
        description: joinLines(e.description as string[] | undefined)
    }))
}

/**
 * Convert form entries to schema entries saved in the state using the
 * nomenclature assigned to represent the line jumps of the description
 * 
 * @param entries - Array of form entries
 * @returns Array of schema entries
 */
function toSchemaEntries(entries: FormEntry[]) {
    return entries.map(e => ({ ...e, description: splitLines(e.description) }))
}

interface EntrySectionFormProps { section: SupportedSection }

export default function EntrySectionForm({ section }: EntrySectionFormProps) {

    const updateSection = useCvStore((state) => state.updateSection)

    const [field1, field2] = UNIQUE_FIELDS[section.type]

    const { register, watch, control } = useForm<FormValues>({
        defaultValues: { entries: toFormEntries(section.entries) }
    })

    const { fields } = useFieldArray({ control, name: 'entries' })

    useEffect(() => {
        const subscription = watch((data) => {
            updateSection(section.id, {
                ...section,
                entries: toSchemaEntries((data.entries ?? []) as FormEntry[]) as any,
            })
        })
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <FormField
                        label={field1.label}
                        type="text"
                        {...register(`entries.${index}.${field1.name}`)}
                    />
                    <FormField
                        label={field2.label}
                        type="text"
                        {...register(`entries.${index}.${field2.name}`)}
                    />
                    <FormField
                        label="Ubicación"
                        type="text"
                        {...register(`entries.${index}.location`)}
                    />
                    <FormField
                        label="Fecha de inicio"
                        type="date"
                        {...register(`entries.${index}.startDate`)}
                    />
                    <FormField
                        label="Fecha de fin"
                        type="date"
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
