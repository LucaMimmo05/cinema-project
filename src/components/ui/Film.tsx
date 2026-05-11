import { Film as FilmInterface } from "@/src/interfaces/filmInterface";
import React from "react";

type Film = {
    film : FilmInterface
}

export default function Film({ film }: Film) {
    return (
        <div className="border border-gray-300 rounded-lg p-4 w-full max-w-60 h-90">
            <h2 className="text-xl font-medium text-gray-600 mb-4">{film.title}</h2>
        </div>
    );
}
