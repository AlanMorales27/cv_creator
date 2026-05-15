'use client'

import { Button } from "@/components/ui/button"
import useCvStore from "@/lib/store/cvStore"
import { useState } from "react"

export default function DownloadCvButton() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const downloadCv = async () => {
        setIsLoading(true)

        const { personalInfo, summary, sections } = useCvStore.getState()

        try{

            const response = await fetch('/api/download-cv', 
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ personalInfo, summary, sections })
            })
            .catch((error) => { throw new Error("Error al generar el CV: " + error)})
    
            if (!response.ok) { throw new Error(response.statusText) }
            
            const blob = await response.blob()
            const url  = URL.createObjectURL(blob)
            const a    = document.createElement('a')
            a.href     = url
            a.download = `resume_${personalInfo.title}_${personalInfo.firstNames}${personalInfo.lastNames}.pdf`
            a.click()
            URL.revokeObjectURL(url)

        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return <Button onClick={downloadCv} disabled={isLoading}>
        {isLoading ? 'Generando...' : 'Descargar CV'} 
    </Button>
}
