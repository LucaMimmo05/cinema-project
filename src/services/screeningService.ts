import { API_URL } from ".";
import { Screening } from "../interfaces/screeningInterface";

    export const getScreeningDetails = async (id: number, date ?: string): Promise<Screening> => {
        try {
            const response = await fetch(API_URL + "/films/" + id + "/screenings?date=" + date)

            const body = await response.json();
            
            return body as Promise<Screening>;
        }

        catch {
            throw new Error("Failed to fetch");
        }
    }
    
    export const getAllScreeningInADate = async (date ?: string) => {
        try {
            const response = await fetch(API_URL + "screenings?date=" + date)

            const body = await response.json();
            
            return body as Promise<Screening>;
        }

        catch {
            throw new Error("Failed to fetch");
        }
    }
