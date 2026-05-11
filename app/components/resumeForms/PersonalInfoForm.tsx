import { Input } from "@/components/ui/input";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

export default function PersonalInfoForm() {
    return (
        <FieldGroup>
            <Field>
                <FieldLabel>First name(s)</FieldLabel>
                <Input type="text" placeholder="John Michael" />
            </Field>

            <Field>
                <FieldLabel>Last name(s)</FieldLabel>
                <Input type="text" placeholder="Doe Smith" />
            </Field>

            <Field>
                <FieldLabel>Professional Title</FieldLabel>
                <Input type="text" placeholder="Software Engineer" />
            </Field>

            <Field>
                <FieldLabel>Location</FieldLabel>
                <Input type="text" placeholder="City, State" />
            </Field>

            <Field>
                <FieldLabel>Postal Code</FieldLabel>
                <Input type="text" placeholder="12345" />
            </Field>

            <Field>
                <FieldLabel>Country</FieldLabel>
                <Input type="text" placeholder="United States" />
            </Field>

            <Field>
                <FieldLabel>Phone Number</FieldLabel>
                <Input type="tel" placeholder="+1234567890" />
                <FieldDescription>International format (E.164)</FieldDescription>
            </Field>

            <Field>
                <FieldLabel>Email</FieldLabel>
                <Input type="email" placeholder="john@example.com" />
            </Field>

            <Field>
                <FieldLabel>LinkedIn</FieldLabel>
                <Input type="url" placeholder="https://linkedin.com/in/johndoe" />
            </Field>

            <Field>
                <FieldLabel>GitHub</FieldLabel>
                <Input type="url" placeholder="https://github.com/johndoe" />
            </Field>
        </FieldGroup>
    );
}
