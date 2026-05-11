import { Input } from "@/components/ui/input"
import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import { ComponentPropsWithoutRef } from "react"

interface FormFieldProps 
extends ComponentPropsWithoutRef<'input'> 
{
    label: string
    description?: string
}

export default function FormField(
    { label, description, ...inputProps }: FormFieldProps
) {
    return (
        <Field>
            <FieldLabel>{label}</FieldLabel>
            <Input {...inputProps} />
            {description && <FieldDescription>{description}</FieldDescription>}
        </Field>
    )
}
