import React from "react";

export default function Button({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <button
            className={`flex items-center justify-center border border-blue-500 text-white text-md py-4 px-8 rounded-xs min-w-4s0 hover:bg-blue-600 transition-colors duration-200 cursor-pointer ${className || ""}`}
        >
            {children}
        </button>
    );
}
