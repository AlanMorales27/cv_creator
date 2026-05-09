import { ExperienceSection } from './ExperienceSection'
import { EducationSection } from './EducationSection'
import { SkillsSection } from './SkillsSection'
import type { SectionItem } from '@/lib/schemas';

export function SectionRenderer({ section }: { section: SectionItem }) {
    switch (section.type) {
        case 'work_experience': return <ExperienceSection {...section} />
        case 'education': return <EducationSection {...section} />
        case 'skills': return <SkillsSection {...section} />
    }
}
