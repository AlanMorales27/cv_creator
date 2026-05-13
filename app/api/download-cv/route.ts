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
        const page = await browser.newPage()
        const origin = new URL(request.url).origin
        await page.goto(`${origin}/print/cv?id=${id}`, { waitUntil: 'networkidle0' })
        const pdf = await page.pdf({ format: 'A4', printBackground: true })

        return new Response(new Uint8Array(pdf), {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="cv.pdf"',
            },
        })
    } finally {
        await browser.close()
        cvPrintStore.delete(id)
    }
}
