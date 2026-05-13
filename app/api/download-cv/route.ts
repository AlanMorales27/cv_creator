import { randomUUID } from 'node:crypto'
import puppeteer from 'puppeteer'
import { CvShapeSchema } from '@/lib/schemas'
import { cvPrintStore } from '@/lib/print/cvPrintStore'

export const runtime = 'nodejs'

export async function POST(request: Request) {
    const parsed = CvShapeSchema.safeParse(await request.json())
    if (!parsed.success) {
        return Response.json({ error: parsed.error.issues }, { status: 400 })
    }

    const id = randomUUID()
    cvPrintStore.set(id, parsed.data)

    const browser = await puppeteer.launch({ headless: true })
    try {
        const origin = new URL(request.url).origin
        const page = await browser.newPage()
        
        await page.goto(`${origin}/print/cv?id=${id}`, { waitUntil: 'networkidle0' })
        
        const pdf = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { 
                top:    '15mm',
                bottom: '15mm',
                left:   '15mm',
                right:  '15mm' 
            },
        })

        return new Response(new Uint8Array(pdf), {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="cv.pdf"',
            },
        })
    } 
    catch (error) {
        console.error('Error generating PDF:', error)
        return new Response(JSON.stringify({ error: 'Failed to generate PDF' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
    finally {
        await browser.close()
        cvPrintStore.delete(id)
    }
}
