import React from "react";

export default function page() {
    return (
        <section className="flex flex-col h-screen w-full items-center justify-start">
            {/* 
            <Image src={null} alt="Film Poster" className="w-full" />
            */}

            {/* Togliere il div e mettere il src dell'immagine */}
            <div className="bg-gray-200 w-full h-80"></div>
            <div className="flex flex-col items-start justify-start w-full p-10">
                <div className="w-full">
                    <p className="text-gray-600 max-w-2xl text-sm">Genere</p>
                    <h1 className="text-2xl font-bold text-gray-800">Titolo</h1>
                    <p className="text-gray-600 max-w-2xl">Descrizione</p>
                </div>
                <div className="flex items-center gap-4 w-full mt-4">
                    <p className="text-gray-600 max-w-2xl text-sm">Anno</p>
                    <p className="text-gray-600 max-w-2xl text-sm">Regista</p>
                    <p className="text-gray-600 max-w-2xl text-sm">Durata</p>
                    <p className="text-gray-600 max-w-2xl text-sm">Rating</p>
                </div>
            </div>
        </section>
    );
}
