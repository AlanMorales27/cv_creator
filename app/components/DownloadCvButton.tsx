import useCvStore from "@/lib/store/cvStore"

export default function DownloadCvButton() {

    const cvData = useCvStore(state => state)

    const downloadCv = async () => {

    }

    return <button> Download cv </button>

}