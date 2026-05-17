import { SectionShell } from './SectionShell'
import { Description } from './Description'
import { EducationItem } from '@/lib/schemas'
import { formatYearMonth } from '@/lib/helpers/utils'

export function EducationSection({ title, entries }: EducationItem) {
    return (
        <SectionShell title={title ?? ''}>
            <div className="flex flex-col gap-[16px]">
                {entries.map((entry, i) => (
                    <div key={i} className="flex">
                        <div className="w-[25%]">{formatYearMonth(entry.startDate)} – {formatYearMonth(entry.endDate)}</div>
                        <div className="w-[75%]">
                            <div className="flex justify-between font-semibold">
                                <span>{entry.degree}</span>
                                <span className="font-normal">{entry.location}</span>
                            </div>
                            <div className="mb-1">{entry.institution}</div>
                            {entry.description &&
                                <Description items={entry.description} />
                            }
                        </div>
                    </div>
                ))}
            </div>
        </SectionShell>
    )
}
