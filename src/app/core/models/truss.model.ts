export class Status {
    date: string;
    plantNumber: number;
    plantGrowth: number;
}

export class Truss {
    _id: string;
    block: string;
    index: number;
    maxHole: number;
    plantId: string;
    startDate: string;
    plantNumber: number;
    plantGrowth: number;
    harvestDate: string;
    mediumGrowthDate: string;
    percentage: number;
    // Plant info
    plantName: string;
    imgSrc: string;
    plantColor: string;
    numberPerKg: number;
}