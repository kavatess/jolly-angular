import { floor } from "mathjs";
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
        return floor(ageMiliSec / (7 * 24 * 3600 * 1000));
    }
    get isReadySeed(): boolean {
        return this.age >= floor(this.seedUpTime / 7);
    }
}

export interface SimpleSeed {
    plantId: string;
    startDate: string;
    plantNumber: number;
}