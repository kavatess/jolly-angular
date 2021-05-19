import { BasicPlant } from "./plant.model";

export class Status {
    date: string;
    plantNumber: number;
    plantGrowth: number;
}

class BasicTrussInfo {
    _id: string;
    block: string;
    index: number;
    maxHole: number;
    plantId: string;
    startDate: string;
}

export class Truss extends BasicTrussInfo {
    plantName: string;
    imgSrc: string;
    plantColor: string;
    numberPerKg: number;
    plantNumber: number;
    plantGrowth: number;
    harvestDate: string;
    mediumGrowthDate: string;
}

export class RawTruss extends BasicTrussInfo {
    realStatus: Status[];
}

export interface TrussHistoryInfo extends BasicPlant, RawTruss {
}