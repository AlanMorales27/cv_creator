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
                <div className="flex justify-between w-full mr-3">
                    {label}
                    {onDelete && (
                        <Trash
                            className="h-5 w-5 cursor-pointer"
                            color="#666666"
                            onClick={(e) => {
                                e.stopPropagation()
                                onDelete()
                            }}
                        />
                    )}
                </div>
            </AccordionTrigger>
            <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
    )
}
