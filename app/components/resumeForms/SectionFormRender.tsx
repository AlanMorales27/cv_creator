import useCvStore from "@/lib/store/cvStore"
import EducationForm from "./EducationForm"
import WorkExperienceForm from "./WorkExperienceForm"
import SkillsForm from "./SkillsForm"

export default function SectionFormRender() {

    const sections = useCvStore((state) => state.sections)

    return (
        <>
            {sections.map((section) => {
                switch (section.type) {
                    case 'work_experience':
                        return <WorkExperienceForm 
                            key={section.id} 
                            section={section} />
                    case 'education':
                        return <EducationForm 
                            key={section.id} 
                            section={section} />
                    case 'skills':
                        return <SkillsForm 
                            key={section.id} 
                            section={section} />
                    default:
                        return null
                }
            })}
        </>
    )
}