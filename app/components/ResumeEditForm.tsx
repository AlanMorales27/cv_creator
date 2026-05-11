import PersonalInfoForm from "./resumeForms/PersonalInfoForm";
import SummaryForm from "./resumeForms/SummaryForm";

export default function ResumeEditForm() {
    return (
        <div>
            <PersonalInfoForm></PersonalInfoForm>
            <SummaryForm></SummaryForm>
        </div>
    );
}