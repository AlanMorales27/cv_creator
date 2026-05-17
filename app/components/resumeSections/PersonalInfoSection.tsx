'use client'

import { PersonalItem } from '@/lib/schemas'
import { useEffect, useState } from 'react';

type AlignType = 'text-center' | 'text-start';

function InLink({ text, url, last = false }: { text: string; url: string; last?: boolean }) {
    return (
        <a
            href={url}
            className={`underline whitespace-nowrap${last ? '' : " after:content-[',']"}`}
        >
            {text}
        </a>
    )
}

export default function PersonalInfoSection({ personalInfo }: { personalInfo: PersonalItem }) {

    const [align, setAlign] = useState<AlignType>('text-center')

    useEffect(() => {
        setAlign(
            personalInfo.photo &&
                personalInfo.photo.length > 0
                ? 'text-start'
                : 'text-center'
        )
    }, [personalInfo])

    return (
        <div className='flex relative min-h-[96px] mb-[16px]'>
            {personalInfo.photo && personalInfo.photo.length > 0 && (
                <div className=' w-[25%]'>
                    <img
                        className='aspect-square object-cover absolute left-0 top-0 w-[96px] rounded-[6px]'
                        src={personalInfo.photo}
                        alt="Profile Photo" />
                </div>
            )}
            <div className={
                `
                    ${personalInfo.photo && personalInfo.photo.length > 0
                        ? 'w-[75%] min-w-0'
                        : 'w-full min-w-0'
                    }
                `
            }>
                <h1 className={`text-[5.29mm] [font-family:Arial,sans-serif] font-semibold text-black mb-0 tracking-wide ${align}`}>
                    {personalInfo.name}
                </h1>
                <p className={`text-[16px] ${align}`}>{personalInfo.title}</p>
                <div className={`text-[14px] flex flex-wrap gap-x-[4px] ${align === 'text-center' ? 'justify-center' : 'justify-start'}`}>
                    <span className="after:content-[','] whitespace-nowrap">
                        {personalInfo.location}, {personalInfo.postalCode}, {personalInfo.country}
                    </span>
                    {personalInfo.phoneNumber &&
                        <InLink
                            text={personalInfo.phoneNumber}
                            url={`tel:${personalInfo.phoneNumber}`}
                        />
                    }
                    {personalInfo.email &&
                        <InLink
                            text={personalInfo.email}
                            url={`mailto:${personalInfo.email}`}
                        />
                    }
                    {personalInfo.linkedIn &&
                        <InLink
                            text="LinkedIn"
                            url={personalInfo.linkedIn}
                        />
                    }
                    {personalInfo.gitHub &&
                        <InLink
                            text="GitHub"
                            url={personalInfo.gitHub}
                            last
                        />
                    }
                </div>
            </div>
        </div>
    )
}
