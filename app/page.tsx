import ResumePDFClient from "./components/ResumePDFClient";
import CvEditingForm from "./components/CvEditingForm";

export default function Home() {
  return (
    <div className="flex flex-row gap-4 h-screen">
      <div className="flex flex-col gap-2 w-[55%] overflow-y-auto items-center">
        <CvEditingForm></CvEditingForm>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ResumePDFClient />
      </div>
    </div>
  );
}
