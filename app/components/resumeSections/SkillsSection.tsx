import { SectionShell } from './SectionShell'
import type { SkillsCategory } from './types'

export function SkillsSection({ title, categories }: { title: string; categories: SkillsCategory[] }) {
    return (
        <SectionShell title={title}>
            <div className="flex flex-col gap-[8px]">
                {categories.map((cat, i) => (
                    <div key={i} className="flex">
                        <div className="w-[25%] font-semibold">{cat.name}</div>
                        <div className="w-[75%]">{cat.items.join(', ')}</div>
                    </div>
                ))}
            </div>
        </SectionShell>
    )
}
