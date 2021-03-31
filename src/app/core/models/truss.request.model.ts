export interface createTrussBody {
    _id: string;
    plantId: number;
    startDate: string;
    plantNumber: number;
    createdSeedId: string;
}

export interface updateMaxHoleBody {
    _id: string;
    maxHole: number;
}

export interface simpleBody {
    _id: string;
}

export interface revertTrussBody {
    _id: string;
    statusIndex: number;
}

export class updateStatusBody {
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