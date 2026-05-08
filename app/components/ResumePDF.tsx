import { CvData } from '../../lib/cv_mock_data.js'
import { SectionRenderer } from './resumeSections/SectionRenderer'
import type { Section } from './resumeSections/types'

function InLink({ text, url, last = false }: { text: string; url: string; last?: boolean }) {
    return (
        <a href={url} className={`underline${last ? '' : " after:content-[','] after:mr-[4px]"}`}>
            {text}
        </a>
    )
}

export default function PDFDocument() {
    const { personalInfo, summary, sections } = CvData
    return (
        <article className="w-[210mm] min-h-[297mm] p-[15mm] bg-white border border-black">
            <h1 className="text-[5.29mm] [font-family:Arial,sans-serif] font-semibold text-black text-center mb-0 uppercase tracking-wide">
                {personalInfo.firstNames} {personalInfo.lastNames}
            </h1>
            <p className="text-[16px] text-center mb-[8px] uppercase">{personalInfo.title}</p>
            <div className="text-[14px] text-center mb-[16px]">
                <span className="after:content-[','] after:mr-[4px]">
                    {personalInfo.location}, {personalInfo.postalCode}, {personalInfo.country}
                </span>
                <InLink text={personalInfo.phoneNumber} url={`tel:${personalInfo.phoneNumber}`} />
                <InLink text={personalInfo.email} url={`mailto:${personalInfo.email}`} />
                <InLink text="LinkedIn" url={personalInfo.linkedIn} />
                <InLink text="GitHub" url={personalInfo.gitHub} last />
            </div>

            <section className="flex border-t-2 border-black pt-[12px] pb-[16px] text-[14px]">
                <div className="w-[25%]">RESUMEN</div>
                <div className="w-[75%]">{summary}</div>
            </section>

            {(sections as Section[]).map((section, i) => (
                <SectionRenderer key={i} section={section} />
            ))}
        </article>
    );
}