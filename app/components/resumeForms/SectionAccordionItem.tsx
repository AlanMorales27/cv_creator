'use client'

import { useEffect, useRef, useState } from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
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
import { GripVertical, Settings, Trash } from "lucide-react"

export type SectionAccordionItemProps = {
    value:           string
    label:           string
    onDelete?:       () => void
    onLabelChange?:  (newLabel: string) => void
    dragHandle?:     React.ReactNode
    children:        React.ReactNode
}

type LabelEditInputProps = {
    value: string
    onChange: (value: string) => void
    onCommit: () => void
    onCancel: () => void
}

export default function SectionAccordionItem(
    props : SectionAccordionItemProps
) {
    const [isEditing, setIsEditing] = useState(false)
    const [draft, setDraft]         = useState(props.label)

    const commit = () => {
        const trimmed = draft.trim()
        if (trimmed && trimmed !== props.label) {
            props.onLabelChange?.(trimmed)
        }
        setIsEditing(false)
    }

    const cancel = () => {
        setDraft(props.label)
        setIsEditing(false)
    }

    const buttons = (
        <div className="flex items-center gap-2">
            {props.onLabelChange && (
                <SettingButton
                    onRename={() => {
                        setDraft(props.label)
                        setIsEditing(true)
                    }}
                />
            )}
            {props.onDelete && <TrashButton onClick={props.onDelete} />}
        </div>
    )

    return (
        <AccordionItem value={props.value}>
            {isEditing ? (
                <AccordionPrimitive.Header className="flex">
                    <div className="flex flex-1 justify-between py-2.5 mr-3">
                        <LabelEditInput
                            value={draft}
                            onChange={setDraft}
                            onCommit={commit}
                            onCancel={cancel}
                        />
                        {buttons}
                    </div>
                </AccordionPrimitive.Header>
            ) : (
                <AccordionTrigger>
                    {props.dragHandle}  
                    <div className="flex justify-between w-full mr-3">
                        <span className="uppercase tracking-wide">{props.label}</span>
                        {buttons}
                    </div>
                </AccordionTrigger>
            )}
            <AccordionContent>{props.children}</AccordionContent>
        </AccordionItem>
    )
}

function TrashButton({ onClick }: { onClick: () => void }) {

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        onClick()
    }

    return (
        <Trash
            className="h-5 w-5 cursor-pointer"
            color="#666666"
            onClick={handleClick}
        />
    )
}


function SettingButton({ onRename }: { onRename: () => void }) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                nativeButton={false}
                render={
                    <Settings
                        className="h-5 w-5 cursor-pointer"
                        color="#666666"
                        onClick={(e) => e.stopPropagation()}
                    />
                }
            />
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={(e) => {
                        e.stopPropagation()
                        onRename()
                    }}
                >
                    Cambiar nombre
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function LabelEditInput(
    { value, onChange, onCommit, onCancel }: LabelEditInputProps
) {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
        inputRef.current?.select()
    }, [])

    return (
        <input
            className="flex-1 bg-transparent outline-none text-sm font-mediu no-underline uppercase tracking-wide"
            ref={inputRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
                e.stopPropagation()
                if (e.key === 'Enter') {
                    e.preventDefault()
                    onCommit()
                } else if (e.key === 'Escape') {
                    e.preventDefault()
                    onCancel()
                }
            }}
            onKeyUp={(e) => e.stopPropagation()}
            onBlur={onCommit}
        />
    )
}