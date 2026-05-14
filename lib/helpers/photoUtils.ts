/**
 * Transform the File object of the photo loaded into a base64 string
 * 
 * @param {File} file - The file to transform
 * @param {number} maxWidth - The maximum width of the image
 * @param {number} quality - The quality of the image
 * 
 * @returns {Promise<string>} The base64 string of the image
 */
interface PhotoFileParams { file: File, maxWidth?: number, quality?: number }

export async function photoFileToBase64(
    { file, maxWidth = 300, quality = 0.85 }: PhotoFileParams
): Promise<string> {
    const url = URL.createObjectURL(file)

    try {
        // Get real dimentions of the image file
        const image = new Image()
        image.src   = url
        
        await new Promise((resolve, reject) => {
            image.onload  = () => resolve(image)
            image.onerror = (error) => reject(`Error while loading the image: ${error}`)
        })

        const originalWidth  = image.width
        const originalHeight = image.height

        const scale = Math.min(1, maxWidth / originalWidth)
        
        const [newWidth, newHeight] = [
            originalWidth * scale,
            originalHeight * scale
        ]

        const canvas = document.createElement('canvas')
        canvas.width  = newWidth
        canvas.height = newHeight

        const ctx = canvas.getContext('2d')
        if(!ctx) throw new Error('2D context is not available in this environment.')

        ctx.drawImage(image, 0, 0, newWidth, newHeight)

        const base64 = canvas.toDataURL('image/jpeg', quality)

        return base64
    }
    catch (error) {
        console.error(
            `Error getting the base64 from the file: 
                ${error}`
        )
        return ''
    }
    finally {
        URL.revokeObjectURL(url)
    }
}