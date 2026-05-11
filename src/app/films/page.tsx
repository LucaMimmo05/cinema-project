import React from "react";
import Input from "../../components/ui/Input";

export default function page() {
    return (
        <section className="flex h-screen w-full items-start justify-between">
            <div className="flex flex-col items-start justify-start bg-gray-50 border border-(--bento-stroke) p-4 w-80 h-screen">
                <h1 className="text-2xl font-medium text-gray-600 border-b border-gray-300 pb-2 w-full">
                    Filtri
                </h1>
                <div className="flex flex-col items-start justify-start mt-10 w-full">
                    <label
                        className="text-gray-600 text-sm mb-2"
                        htmlFor="genre"
                    >
                        Genere
                    </label>
                    <Input
                        type="select"
                        selectContent={[
                            "Azione",
                            "Commedia",
                            "Dramma",
                            "Horror",
                            "Sci-fi",
                            "Animazione",
                            "Documentario",
                        ]}
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col items-start justify-start mt-4 w-full">
                    <label
                        className="text-gray-600 text-sm mb-2"
                        htmlFor="year"
                    >
                        Anno
                    </label>
                    <Input
                        type="select"
                        selectContent={["2020", "2021", "2022", "2023"]}
                        placeholder=""
                    />
                </div>
            </div>

            <div className="w-full flex-1 p-10">
                <Input type="searchbar" placeholder="Cerca un film..." />

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-100">
                        <h2 className="text-xl font-medium text-gray-600 mb-4">
                            Film
                        </h2>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-100">
                        <h2 className="text-xl font-medium text-gray-600 mb-4">
                            Film
                        </h2>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-100">
                        <h2 className="text-xl font-medium text-gray-600 mb-4">
                            Film
                        </h2>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-100">
                        <h2 className="text-xl font-medium text-gray-600 mb-4">
                            Film
                        </h2>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-100">
                        <h2 className="text-xl font-medium text-gray-600 mb-4">
                            Film
                        </h2>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-100">
                        <h2 className="text-xl font-medium text-gray-600 mb-4">
                            Film
                        </h2>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-100">
                        <h2 className="text-xl font-medium text-gray-600 mb-4">
                            Film
                        </h2>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-100">
                        <h2 className="text-xl font-medium text-gray-600 mb-4">
                            Film
                        </h2>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-100">
                        <h2 className="text-xl font-medium text-gray-600 mb-4">
                            Film
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
