        const API_URL = process.env.NEXT_PUBLIC_API_URL;
       
    export const getAllFilms = async () => {
        try {
            const response = await fetch(API_URL + "/films" as string);

             const body = await response.json();
            console.log(body);
             return body;
        }
        catch {
            throw new Error("Failed to fetch");
        }
    }

    export const getSingleFilm = async (id : number) => {
        try {
            const response = await fetch(API_URL + "/films/" + id as string);

             const body = await response.json();
            console.log(body);
             return body;
        }
        catch {
            throw new Error("Failed to fetch");
        }
    }