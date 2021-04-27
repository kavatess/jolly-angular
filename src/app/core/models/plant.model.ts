export class BasicPlant {
    plantName: string = '';
    imgSrc: string = '';
    plantColor: string = '';
    growUpTime: number = 0;
    mediumGrowthTime: number = 0;
    seedUpTime: number = 0;
    numberPerKg: number = 0;
    alivePercent: number = 0;
    worm: string = '';
    wormMonth: string = '';
}

export class Plant extends BasicPlant {
    _id: string;
}