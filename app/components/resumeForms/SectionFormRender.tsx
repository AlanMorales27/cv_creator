import useCvStore from "@/lib/store/cvStore"
import EducationForm from "./EducationForm"
import WorkExperienceForm from "./WorkExperienceForm"
import SkillsForm from "./SkillsForm"
import PersonalInfoForm from "./PersonalInfoForm"
import SummaryForm from "./SummaryForm"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const sectionLabels: Record<string, string> = {
    work_experience: 'Experiencia laboral',
    education: 'Educación',
    skills: 'Habilidades',
}

export default function SectionFormRender() {

    const sections = useCvStore((state) => state.sections)

    return (
        <Accordion multiple className="w-full">
            <AccordionItem value="personal_info">
                <AccordionTrigger>INFORMACIÓN PERSONAL</AccordionTrigger>
                <AccordionContent>
                    <PersonalInfoForm />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="summary">
                <AccordionTrigger>RESUMEN</AccordionTrigger>
                <AccordionContent>
                    <SummaryForm />
                </AccordionContent>
            </AccordionItem>
            {sections.map((section) => {
                const label = section.title || 
                              sectionLabels[section.type] || 
                              section.type

                let form: React.ReactNode = null
                switch (section.type) {
                    case 'work_experience':
                        form = <WorkExperienceForm section={section} />
                        break
                    case 'education':
                        form = <EducationForm section={section} />
                        break
                    case 'skills':
                        form = <SkillsForm section={section} />
                        break
                }

                if (!form) return null

                return (
                    <AccordionItem key={section.id} value={String(section.id)}>
                        <AccordionTrigger>{label}</AccordionTrigger>
                        <AccordionContent>{form}</AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}