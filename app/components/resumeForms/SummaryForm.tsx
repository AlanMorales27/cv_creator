import useCvStore from "@/lib/store/cvStore"

import FormTextarea from "./FormTextarea"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

export default function SummaryForm() {

    const summary = useCvStore((state) => state.summary)
    const updateSummary = useCvStore((state) => state.updateSummary)

    const { register, watch } = useForm<{ summary: string }>({ defaultValues: { summary: summary ?? '' } })

    useEffect(() => {
        const subscription = watch((data) => {
            updateSummary(data.summary ?? '')
        })
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <>
            <FormTextarea
                label="Summary"
                description="A brief overview of your skills and experience"
                {...register('summary')}
            />
        </>
    )
}