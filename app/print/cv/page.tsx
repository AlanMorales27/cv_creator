import { notFound } from 'next/navigation'
import ResumePDF from '@/app/components/ResumePDF'
import { cvPrintStore } from '@/lib/print/cvPrintStore'

export const dynamic = 'force-dynamic'

export default async function PrintCvPage({
    searchParams,
}: {
    searchParams: Promise<{ id?: string }>
}) {
    const { id } = await searchParams
    if (!id) notFound()

    const data = cvPrintStore.get(id)
    if (!data) notFound()

    return <ResumePDF {...data} />
}
