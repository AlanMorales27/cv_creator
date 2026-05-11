import { Textarea } from "@/components/ui/textarea"
import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import { ComponentPropsWithoutRef } from "react"

interface FormTextareaProps
extends ComponentPropsWithoutRef<'textarea'>
{
    label: string
    description?: string
}

export default function FormTextarea(
    { label, description, ...textareaProps }: FormTextareaProps
) {
    return (
        <Field>
            <FieldLabel>{label}</FieldLabel>
            <Textarea {...textareaProps} />
            {description && <FieldDescription>{description}</FieldDescription>}
        </Field>
    )
}
