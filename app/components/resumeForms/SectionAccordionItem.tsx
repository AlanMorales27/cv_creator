'use client'

import { useEffect, useRef, useState } from "react"
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Settings, Trash } from "lucide-react"

type SectionAccordionItemProps = {
    value: string
    label: string
    onDelete?: () => void
    onLabelChange?: (newLabel: string) => void
    children: React.ReactNode
}

export default function SectionAccordionItem(
    { value, label, onDelete, onLabelChange, children }: SectionAccordionItemProps
) {
    const [isEditing, setIsEditing] = useState(false)
    const [draft, setDraft] = useState(label)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus()
            inputRef.current?.select()
        }
    }, [isEditing])

    const commit = () => {
        const trimmed = draft.trim()
        if (trimmed && trimmed !== label) {
            onLabelChange?.(trimmed)
        }
        setIsEditing(false)
    }

    const cancel = () => {
        setDraft(label)
        setIsEditing(false)
    }

    return (
        <AccordionItem value={value}>
            <AccordionTrigger>
                <div className="flex justify-between w-full mr-3">
                    {isEditing ? (
                        <input
                            ref={inputRef}
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            onKeyDown={(e) => {
                                e.stopPropagation()
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                    commit()
                                } else if (e.key === 'Escape') {
                                    e.preventDefault()
                                    cancel()
                                }
                            }}
                            onBlur={commit}
                            className="flex-1 bg-transparent border-b border-border outline-none text-sm font-medium"
                        />
                    ) : (
                        <span>{label}</span>
                    )}
                    <div className="flex items-center gap-2">
                        {onLabelChange && (
                            <DropdownMenu>
                                <DropdownMenuTrigger render={
                                    <Settings
                                        className="h-5 w-5 cursor-pointer"
                                        color="#666666"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                } />
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setDraft(label)
                                            setIsEditing(true)
                                        }}
                                    >
                                        Cambiar nombre
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
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
                </div>
            </AccordionTrigger>
            <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
    )
}
