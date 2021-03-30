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

export class TrussTimeline {
    _id: string;
    block: string;
    index: number;
    maxHole: number;
    timeline: MileStone[];
    constructor(_id: string = "", block: string = "", index: number = 0, maxHole: number = 0, timeline: MileStone[] = []) {
        this._id = _id;
        this.block = block;
        this.index = index;
        this.maxHole = maxHole;
        this.timeline = timeline;
    }
}

export class Truss {
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