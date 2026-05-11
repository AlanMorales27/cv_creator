'use client'

import { SectionItem } from '@/lib/schemas';
import { SectionRenderer } from './resumeSections/SectionRenderer'
import PersonalInfoSection from './resumeSections/PersonalInfoSection'
import useCvStore from '@/lib/store/cvStore';

export default function PDFDocument() {

    const personalInfo = useCvStore((state)=>state.personalInfo)
    const summary      = useCvStore((state)=>state.summary)
    const sections     = useCvStore((state)=>state.sections)

    return (
        <article className="w-[210mm] min-h-[297mm] p-[15mm] bg-white border border-black">
            <PersonalInfoSection personalInfo={personalInfo} />

            <section className="flex border-t-2 border-black pt-[12px] pb-[16px] text-[14px]">
                <div className="w-[25%]">RESUMEN</div>
                <div className="w-[75%]">{summary}</div>
            </section>

            {(sections as SectionItem[]).map((section, i) => (
                <SectionRenderer key={i} section={section} />
            ))}
        </article>
    );
}