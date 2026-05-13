'use client'

import useCvStore from '@/lib/store/cvStore'
import ResumePDF from './ResumePDF'

export default function ResumePDFClient() {
    const personalInfo = useCvStore(state => state.personalInfo)
    const summary      = useCvStore(state => state.summary)
    const sections     = useCvStore(state => state.sections)

    return <ResumePDF personalInfo={personalInfo} summary={summary} sections={sections} />
}
