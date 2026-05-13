'use client'

import useCvStore from "@/lib/store/cvStore"

export default function DownloadCvButton() {

    const downloadCv = async () => {
        const { personalInfo, summary, sections } = useCvStore.getState()

        const response = await fetch('/api/download-cv', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ personalInfo, summary, sections })
        })

        if (!response.ok) {
            throw new Error('Failed to download CV')
        }

        const blob = await response.blob()
        const url  = URL.createObjectURL(blob)
        const a    = document.createElement('a')
        a.href     = url
        a.download = 'cv.pdf'
        a.click()
        URL.revokeObjectURL(url)
    }

    return <button onClick={downloadCv}> Download cv </button>
}
