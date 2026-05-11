import PersonalInfoForm from "./resumeForms/PersonalInfoForm";
import SectionFormRender from "./resumeForms/SectionFormRender";
import SummaryForm from "./resumeForms/SummaryForm";

export default function ResumeEditForm() {
    return (
        <div>
            <PersonalInfoForm/>
            <SummaryForm/>
            <SectionFormRender/>
        </div>
    );
}