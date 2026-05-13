export function SectionShell({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="border-t-[1px] border-black pt-[12px] pb-[16px] text-[14px]">
            <div className="uppercase mb-4">{title}</div>
            {children}
        </section>
    )
}
