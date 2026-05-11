/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useEffect, useState } from "react";
import Input from "../../components/ui/Input";
import { Film as FilmInterface } from "@/src/interfaces/filmInterface";
import { getAllFilms } from "@/src/services/filmService";
import Film  from "@/src/components/ui/Film";

export default function page() {
    const [films, setFilms] = useState<FilmInterface[]>([]);

    useEffect(() => {
    const load = async () => {
        const films = await getAllFilms();
        setFilms(films);
    };
    load();
    }, []);
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
                    {films.map((film) => {
                        return (
                            <Film key={film.id} film={film}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
