import { CvData } from '../../lib/cv_mock_data.js'

function InLink({ text, url, last = false }: { text: string; url: string; last?: boolean }) {
    return (<a href={url} className={`underline${last ? '' : " after:content-[','] after:mr-[4px]"}`}> {text} </a>)
}

type WorkExperience = {
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
}

function WorkExperienceItem({ role, company, location, startDate, endDate, description }: WorkExperience) {
    return (
        <div className="flex">
            <div className="w-[25%]">{startDate} – {endDate}</div>
            <div className="w-[75%]">
                <div className="flex justify-between font-semibold">
                    <span>{role}</span>
                    <span className="font-normal">{location}</span>
                </div>
                <div className="mb-1">{company}</div>
                <ul className="list-disc pl-5">
                    {description.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default function PDFDocument() {
    return (
        <article className="w-[210mm] h-[297mm] p-[15mm] bg-white border-1 border-black">
            <h1 className="text-[5.29mm] [font-family:Arial,sans-serif] font-semibold text-black text-center mb-[8px]">
                {CvData.personalInfo.firstNames + " " + CvData.personalInfo.lastNames}
            </h1>
            <div className="text-[14px] text-center mb-[16px]">
                <span className="after:content-[','] after:mr-[4px]">
                    {CvData.personalInfo.location + ", " + CvData.personalInfo.postalCode + ", " + CvData.personalInfo.country}
                </span>
                <InLink text={CvData.personalInfo.phoneNumber} url={`tel:${CvData.personalInfo.phoneNumber}`} />
                <InLink text={CvData.personalInfo.email} url={`mailto:${CvData.personalInfo.email}`} />
                <InLink text={"LinkedIn"} url={CvData.personalInfo.linkedIn} />
                <InLink text={"GitHub"} url={CvData.personalInfo.gitHub} last />
            </div>
            <section className="flex border-t-2 border-black pt-[12px] pb-[16px] text-[14px]">
                <div className="w-[25%]">RESUMEN</div>
                <div className="w-[75%]">{CvData.summary}</div>
            </section>

            <section className="border-t-2 border-black pt-[12px] pb-[16px] text-[14px]">
                <div className="uppercase mb-4">EXPERIENCIA LABORAL</div>
                <div className="flex flex-col gap-[16px]">
                    {CvData.workExperience.map((job, index) => (
                        <WorkExperienceItem key={index} {...job} />
                    ))}
                </div>
            </section>
        </article>
    );
}