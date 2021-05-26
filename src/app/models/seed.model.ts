import { Plant } from "./plant.model";

export class Seed implements BasicSeedInfo {
    _id: string;
    plantId: string;
    startDate: string;
    plantNumber: number;
    plantName: string;
    imgSrc: string;
    plantColor: string;
    seedUpTime: number;
    age: number;
    isReadySeed: boolean;
}

export class BasicSeedInfo implements SimpleSeed {
    plantId: string;
    startDate: string;
    plantNumber: number;
    plantName: string;
    imgSrc: string;
    plantColor: string;
    seedUpTime: number;
    constructor(seedValue: any, plantType: Plant = new Plant()) {
        this.plantId = seedValue.plantId;
        this.startDate = seedValue.startDate;
        this.plantNumber = seedValue.plantNumber;
        this.plantName = plantType.plantName;
        this.imgSrc = plantType.imgSrc;
        this.plantColor = plantType.plantColor;
        this.seedUpTime = plantType.seedUpTime;
    }
    get age(): number {
        const ageMiliSec = new Date().getTime() - new Date(this.startDate).getTime();
        return Number(Number(ageMiliSec / (7 * 86400000)).toFixed(0));
    }
    get isReadySeed(): boolean {
        return new Date().getTime() - new Date(this.startDate).getTime() >= this.seedUpTime * 86400000;
    }
}

export interface SimpleSeed {
    plantId: string;
    startDate: string;
    plantNumber: number;
}