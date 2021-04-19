export class BasicPlant {
    plantName: string;
    imgSrc: string;
    plantColor: string;
    growUpTime: number;
    mediumGrowthTime: number;
    seedUpTime: number;
    numberPerKg: number;
    alivePercent: number;
    worm: string;
    wormMonth: string;
}

export class Plant extends BasicPlant {
    _id: string;
}