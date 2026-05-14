import ResumePDFClient from "./components/ResumePDFClient";
import ResumeEditForm from "./components/ResumeEditForm";
import DownloadCvButton from "./components/DownloadCvButton";
import AddSectionButton from "./components/AddSectionButton";

export default function Home() {
  return (
    <div className="flex flex-row gap-4 h-screen">
      <div className="flex flex-col gap-2 w-[55%] overflow-y-auto">
        <ResumeEditForm></ResumeEditForm>
        <AddSectionButton />
        <DownloadCvButton></DownloadCvButton>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ResumePDFClient />
      </div>
    </div>
  );
}
