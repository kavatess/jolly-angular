export class BasicPlant {
    plantName: string = '';
    imgSrc: string = '';
    plantColor: string = '#006400';
    growUpTime: number = 30;
    mediumGrowthTime: number = 15;
    seedUpTime: number = 21;
    numberPerKg: number = 0;
    alivePercent: number =90;
    worm: string = '';
    wormMonth: string = '';
}

export class Plant extends BasicPlant {
    _id: string = '';
}