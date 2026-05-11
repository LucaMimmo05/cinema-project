import { API_URL } from ".";
import { Film } from "../interfaces/filmInterface";
       
    export const getAllFilms = async () : Promise<Film> => {
        try {
            const response = await fetch(API_URL + "/films" as string);
            const body = await response.json();

            return body as Promise<Film>;
        }

        catch {
            throw new Error("Failed to fetch");
        }
    }

    export const getFilmDetails = async (id : number) : Promise<Film> => {
        try {
            const response = await fetch(API_URL + "/films/" + id as string);
            const body = await response.json();

            return body as Promise<Film>;
        }

        catch {
            throw new Error("Failed to fetch");
        }
    }

   