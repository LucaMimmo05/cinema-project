import React from "react";

export default function Input({
    type,
    placeholder,
    selectContent,
}: {
    type: string;
    placeholder: string;
    selectContent?: string[];
}) {
    if (type === "searchbar") {
        return (
            <input
                type={type}
                placeholder={placeholder}
                className="w-full max-w-md text-gray-800 placeholder:text-gray-400 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2"
            />
        );
    }

    if (type === "select") {
        return (
            <select className="w-full max-w-md text-gray-800 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2">
                {selectContent?.map((content, i) => (
                    <option key={i} value={content}>
                        {content}
                    </option>
                ))}
            </select>
        );
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}
