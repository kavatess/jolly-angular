import { Plant } from "./plant.model";

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
    plantNumber: number;
    plantGrowth: number;
    harvestDate: string;
    mediumGrowthDate: string;
    // Plant info
    plantName: string;
    imgSrc: string;
    plantColor: string;
    numberPerKg: number;
}

export class RawTruss extends BasicTrussInfo {
    realStatus: Status[];
    plantType: Plant;
}

export interface TrussHistoryInfo {
    _id: string;
    trussId: string;
    plantId: string;
    startDate: string;
    realStatus: Status[];
    plantType: Plant;
}