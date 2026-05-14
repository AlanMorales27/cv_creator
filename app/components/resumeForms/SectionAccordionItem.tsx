import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Trash } from "lucide-react"

type SectionAccordionItemProps = {
    value: string
    label: string
    onDelete?: () => void
    children: React.ReactNode
}

export default function SectionAccordionItem(
    { value, label, onDelete, children }: SectionAccordionItemProps
) {
    return (
        <AccordionItem value={value}>
            <AccordionTrigger>
                {label}
                {onDelete && (
                    <Trash
                        onClick={(e) => {
                            e.stopPropagation()
                            onDelete()
                        }}
                    />
                )}
            </AccordionTrigger>
            <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
    )
}
