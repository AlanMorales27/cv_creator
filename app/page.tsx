'use client'

import useCvStore from "@/lib/store/cvStore";
import PDFDocument from "./components/ResumePDF";

export default function Home() {
  return (
    <div>
      <PDFDocument></PDFDocument>
      <button onClick={() => {
        const state = useCvStore.getState();
        state.addSection({
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
      }}>Add</button>
    </div>
  );
}
