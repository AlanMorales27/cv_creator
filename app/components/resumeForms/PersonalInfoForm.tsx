'use client'

import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import useCvStore from '@/lib/store/cvStore'
import { PersonalItem } from '@/lib/schemas'

export default function PersonalInfoForm() {
    const personalInfo        = useCvStore(state => state.personalInfo)
    const updatePersonalInfo  = useCvStore(state => state.updatePersonalInfo)

    const { register, watch } = useForm<PersonalItem>({ defaultValues: personalInfo })

    useEffect(() => {
        const subscription = watch((data) => {
            updatePersonalInfo(data as PersonalItem)
        })
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <>
            <FieldGroup>
                <Field>
                    <FieldLabel>First name(s)</FieldLabel>
                    <Input type="text" placeholder="John Michael" {...register('firstNames')} />
                </Field>

                <Field>
                    <FieldLabel>Last name(s)</FieldLabel>
                    <Input type="text" placeholder="Doe Smith" {...register('lastNames')} />
                </Field>

                <Field>
                    <FieldLabel>Professional Title</FieldLabel>
                    <Input type="text" placeholder="Software Engineer" {...register('title')} />
                </Field>

                <Field>
                    <FieldLabel>Location</FieldLabel>
                    <Input type="text" placeholder="City, State" {...register('location')} />
                </Field>

                <Field>
                    <FieldLabel>Postal Code</FieldLabel>
                    <Input type="text" placeholder="12345" {...register('postalCode')} />
                </Field>

                <Field>
                    <FieldLabel>Country</FieldLabel>
                    <Input type="text" placeholder="United States" {...register('country')} />
                </Field>

                <Field>
                    <FieldLabel>Phone Number</FieldLabel>
                    <Input type="tel" placeholder="+1234567890" {...register('phoneNumber')} />
                    <FieldDescription>International format (E.164)</FieldDescription>
                </Field>

                <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input type="email" placeholder="john@example.com" {...register('email')} />
                </Field>

                <Field>
                    <FieldLabel>LinkedIn</FieldLabel>
                    <Input type="url" placeholder="https://linkedin.com/in/johndoe" {...register('linkedIn')} />
                </Field>

                <Field>
                    <FieldLabel>GitHub</FieldLabel>
                    <Input type="url" placeholder="https://github.com/johndoe" {...register('gitHub')} />
                </Field>
            </FieldGroup>
        </>
    )
}
