import { SectionShell } from './SectionShell'
import type { WorkEntry } from './types'

export function WorkExperienceSection({ title, entries }: { title: string; entries: WorkEntry[] }) {
    return (
        <SectionShell title={title}>
            <div className="flex flex-col gap-[16px]">
                {entries.map((entry, i) => (
                    <div key={i} className="flex">
                        <div className="w-[25%]">{entry.startDate} – {entry.endDate}</div>
                        <div className="w-[75%]">
                            <div className="flex justify-between font-semibold">
                                <span>{entry.role}</span>
                                <span className="font-normal">{entry.location}</span>
                            </div>
                            <div className="mb-1">{entry.company}</div>
                            <ul className="list-disc pl-5">
                                {entry.description.map((item, j) => <li key={j}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </SectionShell>
    )
}
