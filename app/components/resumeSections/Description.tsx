'use client'

export function Description({ items }: { items?: string[] }) {
    
    if (!items || items.length === 0) return null;

    if (items.length === 1) { return <p className="wrap-break-word break-inside-avoid">{items[0]}</p> }

    return (
        <ul className="list-disc pl-5">
            {items?.map((item, index) => (
                <li className="wrap-break-word break-inside-avoid" key={index}>{item}</li>
            ))}
        </ul>
    );
}
