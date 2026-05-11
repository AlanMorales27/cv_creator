'use client'

import useCvStore from '@/lib/store/cvStore'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { PersonalItem } from '@/lib/schemas'
import { FieldGroup } from "@/components/ui/field"
import FormField from './FormField'

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
                <div className='flex flex-row gap-2'>
                    <FormField 
                        label="First name(s)"
                        type="text"
                        placeholder="John Michael"
                        {...register('firstNames')} 
                    />
                    <FormField 
                        label="Last name(s)"
                        type="text"
                        placeholder="Doe Smith"
                        {...register('lastNames')}
                    />
                </div>
                <FormField 
                    label="Professional Title"
                    type="text"
                    placeholder="Software Engineer"
                    {...register('title')} 
                />
                <FormField 
                    label="Location"
                    type="text"
                    placeholder="City, State"
                    {...register('location')} 
                />
                <div className='flex flex-row gap-2'>
                    <FormField 
                        label="Postal Code"
                        type="text"
                        placeholder="12345"
                        {...register('postalCode')} 
                    />
                    <FormField 
                        label="Country"
                        type="text"
                        placeholder="United States"
                        {...register('country')} 
                    />
                </div>
                <FormField 
                    label="Phone Number"
                    type="tel"
                    placeholder="+1234567890"
                    description="International format (E.164)"
                    {...register('phoneNumber')} />
                <FormField 
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email')} />
                <FormField 
                    label="LinkedIn"
                    type="url"
                    placeholder="https://linkedin.com/in/johndoe"
                    {...register('linkedIn')} />
                <FormField 
                    label="GitHub" 
                    type="url" 
                    placeholder="https://github.com/johndoe" 
                    {...register('gitHub')} />
            </FieldGroup>
        </>
    )
}
