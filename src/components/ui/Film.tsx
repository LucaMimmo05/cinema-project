import React from "react";

export default function Film({ title }: { title: string }) {
    return (
        <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-100">
            <h2 className="text-xl font-medium text-gray-600 mb-4">{title}</h2>
        </div>
    );
}
