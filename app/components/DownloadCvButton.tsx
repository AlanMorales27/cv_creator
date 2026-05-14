'use client'

import { Button } from "@/components/ui/button"
import useCvStore from "@/lib/store/cvStore"
import { useState } from "react"

export default function DownloadCvButton() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const downloadCv = async () => {
        setIsLoading(true)

        const { personalInfo, summary, sections } = useCvStore.getState()

        const response = await fetch('/api/download-cv', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ personalInfo, summary, sections })
        })
        .finally(() => setIsLoading(false))

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const blob = await response.blob()
        const url  = URL.createObjectURL(blob)
        const a    = document.createElement('a')
        a.href     = url
        a.download = 'cv.pdf'
        a.click()
        URL.revokeObjectURL(url)
    }

    return <Button onClick={downloadCv} disabled={isLoading}>
        {isLoading ? 'Generando...' : 'Descargar CV'} 
    </Button>
}
