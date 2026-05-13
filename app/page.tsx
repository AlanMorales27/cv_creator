'use client'

import useCvStore from "@/lib/store/cvStore";
import ResumePDFClient from "./components/ResumePDFClient";
import ResumeEditForm from "./components/ResumeEditForm";
import DownloadCvButton from "./components/DownloadCvButton";

export default function Home() {
  return (
    <div className="flex flex-row gap-4">
      <ResumePDFClient />
      <div className="flex flex-col gap-2 w-[40%]">
        <ResumeEditForm></ResumeEditForm>
        <button onClick={() => {
        const state = useCvStore.getState();
        state.addSection({
            id: Date.now(),
            type: "work_experience",
            title: "Work Experience",
            entries: [
              {
                role: "Software Engineer",
                company: "Google",
                location: "Mountain View, CA",
                startDate: "2024-01-01",
                endDate: "2025-01-01",
                description: ["Developed a new feature", "Fixed some bugs"]
              }
            ]
          })
      }}>
        Add
      </button>
      <DownloadCvButton></DownloadCvButton>
      </div>
    </div>
  );
}
