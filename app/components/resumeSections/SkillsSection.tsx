import type { SkillsSection as SkillsSectionType } from "@/lib/schemas/SkillItemSchema";

export function SkillsSection({ title, categories, displayFormat = 'comma' }: SkillsSectionType) {

    const renderItem = (item: string | { name: string; level?: string }) => {
        if (typeof item === 'string') return item;
        return item.level ? `${item.name} (${item.level})` : item.name;
    };

    return (
        <section className="flex border-t-2 border-black pt-[12px] pb-[16px] text-[14px]">
            <div className="w-[25%] uppercase mb-4 pr-2">{title}</div>
            <div className="w-[75%] flex flex-col gap-[12px]">
                {categories.map((cat, i) => (
                    <div key={i}>
                        {cat.name && <div className="font-semibold mb-1">{cat.name}</div>}
                        {displayFormat === 'list' ? (
                            <div className="grid grid-cols-2 gap-y-1">
                                {cat.items.map((item, j) => (
                                    <div key={j}>{renderItem(item)}</div>
                                ))}
                            </div>
                        ) : (
                            <div className="">{cat.items.map(renderItem).join(', ')}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
