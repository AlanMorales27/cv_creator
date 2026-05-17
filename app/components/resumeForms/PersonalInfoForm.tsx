'use client'

import useCvStore from '@/lib/store/cvStore'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { PersonalItem } from '@/lib/schemas'
import { FieldGroup } from "@/components/ui/field"
import FormField from './FormField'
import { photoFileToBase64 } from '@/lib/helpers/photoUtils'
import { Trash } from 'lucide-react'

export default function PersonalInfoForm() {
    const personalInfo        = useCvStore(state => state.personalInfo)
    const updatePersonalInfo  = useCvStore(state => state.updatePersonalInfo)

    const [photoInputKey, setPhotoInputKey] = useState(0)

    const { register, watch } = useForm<PersonalItem>({ defaultValues: personalInfo })

    useEffect(() => {
        const subscription = watch((data) => {
            updatePersonalInfo(data as PersonalItem)
        })
        return () => subscription.unsubscribe()
    }, [watch])
    
    const handlePhotoChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        try {
            const file = e.target.files?.[0]
            if (!file) {
                throw new Error('No photo selected')
            }
            const base64 = await photoFileToBase64({ file })
            
            if (!base64 || base64.length === 0) {
                throw new Error('Base64 is empty')
            }``

            updatePersonalInfo({...personalInfo, photo: base64, photoName: file.name})
        } catch (error) {
            console.error(error)
        }
    }

    const handlePhotoRemove = () => {
        updatePersonalInfo({ ...personalInfo, photo: undefined, photoName: undefined })
        setPhotoInputKey(k => k + 1)
    }

    return (
        <>
            <FieldGroup>
                <div>
                    <div className='flex flex-row items-end gap-2'>
                        <div className='flex-1'>
                            <FormField
                                key={photoInputKey}
                                label="Upload your photo"
                                type='file'
                                accept='image/*'
                                onChange={handlePhotoChange}
                                description={personalInfo.photoName}
                            >
                            </FormField>
                        </div>
                        {personalInfo.photo && (
                            <button
                                type='button'
                                onClick={handlePhotoRemove}
                                aria-label='Remove photo'
                                className='p-2 cursor-pointer'
                            >
                                <Trash className='h-5 w-5' color='#666666' />
                            </button>
                        )}
                    </div>
                    
                    {/* Photo preview */}
                    { personalInfo.photo && (
                        <div className='bg-[#ecedef] relative w-full touch-none overflow-hidden overscroll-contain h-74'>
                            <img
                                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 touch-none select-none object-cover pointer-events-none'
                                src={personalInfo.photo}
                                alt="Profile photo preview"
                            />
                        </div>
                    )}
                </div>
                <div className='flex flex-row gap-2'>
                    <FormField
                        label="Name"
                        type="text"
                        placeholder="John Michael Doe Smith"
                        {...register('name')}
                    />
                    <FormField
                        label="Professional Title"
                        type="text"
                        placeholder="Software Engineer"
                        {...register('title')}
                    />
                </div>
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
