export interface CreateTrussBody {
    _id: string;
    seedId: string;
    startDate: string;
}

export interface UpdateMaxHoleBody {
    _id: string;
    maxHole: number;
}

export interface RevertTrussBody {
    _id: string;
    statusIndex: number;
}

export class UpdateStatusBody {
    _id: string;
    date: string;
    plantNumber: number;
    plantGrowth: number;
    constructor(_id: string, plantNumber: number, plantGrowth: number) {
        this._id = _id;
        this.date = new Date().toString();
        this.plantNumber = plantNumber ? Number(plantNumber) : 0;
        this.plantGrowth = Number(plantGrowth);
    }
}