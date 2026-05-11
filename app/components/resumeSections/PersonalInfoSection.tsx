import { PersonalItem } from '@/lib/schemas'

function InLink({ text, url, last = false }: { text: string; url: string; last?: boolean }) {
    return (
        <a 
            href={url} 
            className={`
                underline 
                ${last ? '' : " after:content-[','] after:mr-[4px]"}
            `}
        >
            {text}
        </a>
    )
}

export default function PersonalInfoSection({ personalInfo }: { personalInfo: PersonalItem }) {
    return (
        <>
            <h1 className="text-[5.29mm] [font-family:Arial,sans-serif] font-semibold text-black text-center mb-0 uppercase tracking-wide">
                {personalInfo.firstNames} {personalInfo.lastNames}
            </h1>
            <p className="text-[16px] text-center mb-[8px] uppercase">{personalInfo.title}</p>
            <div className="text-[14px] text-center mb-[16px]">
                <span className="after:content-[','] after:mr-[4px]">
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
        </>
    )
}
