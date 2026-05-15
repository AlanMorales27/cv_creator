import AddSectionButton from "./AddSectionButton";
import DownloadCvButton from "./DownloadCvButton";
import ResumeEditForm from "./ResumeEditForm";

export default function CvEditingForm() {
    return (
        <div className="w-[80%] pt-4">
            <ResumeEditForm></ResumeEditForm>
            <AddSectionButton />
            <DownloadCvButton></DownloadCvButton>
        </div>
    )
}