import useCvStore from "@/lib/store/cvStore"
import EntrySectionForm from "./EntrySectionForm"
import SkillsForm from "./SkillsForm"
import PersonalInfoForm from "./PersonalInfoForm"
import SummaryForm from "./SummaryForm"
import SectionAccordionItem from "./SectionAccordionItem"
import { Accordion } from "@/components/ui/accordion"

const sectionLabels: Record<string, string> = {
    work_experience: 'Experiencia laboral',
    education: 'Educación',
    skills: 'Habilidades',
}

export default function SectionFormRender() {

    const sections = useCvStore((state) => state.sections)

    return (
        <Accordion multiple className="w-full">
            <SectionAccordionItem
                value="personal_info"
                label="INFORMACIÓN PERSONAL"
            >
                <PersonalInfoForm />
            </SectionAccordionItem>
            <SectionAccordionItem
                value="summary"
                label="RESUMEN"
            >
                <SummaryForm />
            </SectionAccordionItem>
            {sections.map((section) => {
                const label = section.title ||
                              sectionLabels[section.type] ||
                              section.type

                let form: React.ReactNode = null
                switch (section.type) {
                    case 'work_experience':
                    case 'education':
                        form = <EntrySectionForm section={section} />
                        break
                    case 'skills':
                        form = <SkillsForm section={section} />
                        break
                }

                if (!form) return null

                return (
                    <SectionAccordionItem
                        key={section.id}
                        value={String(section.id)}
                        label={label}
                    >
                        {form}
                    </SectionAccordionItem>
                )
            })}
        </Accordion>
    )
}
