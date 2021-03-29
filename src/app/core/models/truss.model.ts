import { PlantModel } from "./plant.model";

export class Status {
    date: string;
    plantNumber: number;
    plantGrowth: number;
}

export interface MileStone extends PlantModel {
    _index: number;
    plantId: string;
    startDate: string;
    statusReal: Status[];
    statusPredict: Status[];
}

export interface TrussTimeline {
    _id: string;
    block: string;
    index: number;
    maxHole: number;
    timeline: MileStone[];
}

export interface Truss {
    _id: string;
    block: string;
    index: number;
    maxHole: number;
    startDate: string;
    plantId: string;
    plantName: string;
    imgSrc: string;
    plantColor: string;
    numberPerKg: number;
    plantNumber: number;
    plantGrowth: number;
    predictHarvestDate: number;
    percentage: number;
}