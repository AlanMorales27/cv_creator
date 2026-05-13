import type { CvShape } from '@/lib/schemas'

declare global {
    // eslint-disable-next-line no-var
    var __cvPrintStore: Map<string, CvShape> | undefined
}

export const cvPrintStore: Map<string, CvShape> =
    globalThis.__cvPrintStore ?? new Map<string, CvShape>()

globalThis.__cvPrintStore = cvPrintStore
