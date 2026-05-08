import type { Section } from './types'
import { WorkExperienceSection } from './WorkExperienceSection'
import { EducationSection } from './EducationSection'
import { SkillsSection } from './SkillsSection'

export function SectionRenderer({ section }: { section: Section }) {
    switch (section.type) {
        case 'work_experience': return <WorkExperienceSection {...section} />
        case 'education':       return <EducationSection {...section} />
        case 'skills':          return <SkillsSection {...section} />
    }
}
