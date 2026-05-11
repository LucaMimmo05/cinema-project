"use client"
import { useEffect } from "react";
import { getAllFilms } from "../services/filmService";

export default function Home() {
    useEffect(() => {
       getAllFilms();
    }, [] )
    return <section>Homepage</section>;
}
