'use client'

import { useState } from "react"
import useCvStore from "@/lib/store/cvStore"
import EntrySectionForm from "./EntrySectionForm"
import SkillsForm from "./SkillsForm"
import PersonalInfoForm from "./PersonalInfoForm"
import SummaryForm from "./SummaryForm"
import SectionAccordionItem from "./SectionAccordionItem"
import { Accordion } from "@/components/ui/accordion"
import { DraggableSection } from "./DraggeableSections"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

const sectionLabels: Record<string, string> = {
    work_experience: 'Experiencia laboral',
    education: 'Educación',
    skills: 'Habilidades',
}

export default function SectionFormRender() {

    const sections = useCvStore((state) => state.sections)

    const deleteSection = useCvStore((state) => state.deleteSection)

    const updateSection = useCvStore((state) => state.updateSection)

    const reorderSections = useCvStore((state) => state.reorderSections)

    const [openValues, setOpenValues] = useState<string[]>([])

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        
        if (!over || active.id === over.id) return

        reorderSections(String(active.id), String(over.id))
    }

    return (
        <Accordion
            multiple
            value={openValues}
            onValueChange={setOpenValues}
            className="w-full"
        >
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
            <DndContext onDragEnd={handleDragEnd}>
                <SortableContext
                    items={sections.map(s => String(s.id))}
                    strategy={verticalListSortingStrategy}
                >
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

                        const id = String(section.id)
                        return (
                            <DraggableSection
                                key={section.id}
                                value={id}
                                label={label}
                                disabled={openValues.includes(id)}
                                onDelete={() => deleteSection(section.id)}
                                onLabelChange={(newLabel) =>
                                    updateSection(section.id, { ...section, title: newLabel })
                                }
                            >
                                {form}
                            </DraggableSection>
                        )
                    })}
                </SortableContext>
            </DndContext>
        </Accordion>
    )
}
