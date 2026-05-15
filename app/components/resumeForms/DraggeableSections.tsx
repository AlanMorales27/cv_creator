'use client'

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import SectionAccordionItem, { SectionAccordionItemProps } from "./SectionAccordionItem";
import { GripVertical } from "lucide-react";

type DraggableSectionProps = Omit<SectionAccordionItemProps, 'dragHandle'> & {
    disabled?: boolean
}

export function DraggableSection(props: DraggableSectionProps) {

    const {
        setNodeRef,
        transform,
        transition,
        listeners,
        attributes,
    } = useSortable({ id: props.value, disabled: props.disabled })

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    }

    return (
        <div ref={setNodeRef} style={style}>
            <SectionAccordionItem
                {...props}
                dragHandle={
                    <GripVertical
                        {...attributes}
                        {...listeners}
                        className={`h-5 w-5 mr-2 ${props.disabled ? 'cursor-not-allowed opacity-40' : 'cursor-grab'}`}
                        color="#666666"
                    />
                }
            >
            </SectionAccordionItem>
        </div>
    )

}

type DraggableRowProps = {
    id:        string
    className?: string
    children:   React.ReactNode
}

export function DraggableRow({ id, className, children }: DraggableRowProps) {

    const {
        setNodeRef,
        transform,
        transition,
        listeners,
        attributes,
    } = useSortable({ id })

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    }

    return (
        <div ref={setNodeRef} style={style} className={className}>
            <GripVertical
                {...attributes}
                {...listeners}
                className="h-5 w-5 cursor-grab shrink-0"
                color="#666666"
            />
            {children}
        </div>
    )
}
