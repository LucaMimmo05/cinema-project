export interface Screening {
    id: number,
    starts_at: Date,
    hall: Hall,
    available_seats: number
}

interface Hall {
    id: number,
    name: string,
    capacity: number
}