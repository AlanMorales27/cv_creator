import { SectionShell } from './SectionShell'
import type { EducationEntry } from './types'

export function EducationSection({ title, entries }: { title: string; entries: EducationEntry[] }) {
    return (
        <SectionShell title={title}>
            <div className="flex flex-col gap-[16px]">
                {entries.map((entry, i) => (
                    <div key={i} className="flex">
                        <div className="w-[25%]">{entry.startDate} – {entry.endDate}</div>
                        <div className="w-[75%]">
                            <div className="flex justify-between font-semibold">
                                <span>{entry.institution}</span>
                                <span className="font-normal">{entry.location}</span>
                            </div>
                            <div className="font-semibold mb-1">{entry.degree}</div>
                            {entry.description.length > 0 && (
                                <ul className="list-disc pl-5">
                                    {entry.description.map((item, j) => <li key={j}>{item}</li>)}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionShell>
    )
}
