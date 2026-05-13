import { Controller, Control, FieldValues, Path } from "react-hook-form"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface FormSelectProps<T extends FieldValues> {
    label: string
    description?: string
    options: readonly string[]
    labels?: Record<string, string>
    name: Path<T>
    control: Control<T>
}

export default function FormSelect<T extends FieldValues>(
    { label, description, options, labels, name, control }: FormSelectProps<T>
) {
    return (
        <Field>
            <FieldLabel>{label}</FieldLabel>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        value={field.value ?? null}
                        onValueChange={(val) => field.onChange(val ?? undefined)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="—">
                                {(value: string | null) => value ? (labels?.[value] ?? value) : null}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {options.map(opt => (
                                <SelectItem key={opt} value={opt}>{labels?.[opt] ?? opt}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            />
            {description && <FieldDescription>{description}</FieldDescription>}
        </Field>
    )
}
