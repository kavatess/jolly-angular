export class PlantModel {
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
    constructor(plant: PlantModel) {
        this.plantName = plant.plantName;
        this.imgSrc = plant.imgSrc;
        this.plantColor = plant.plantColor;
        this.growUpTime = plant.growUpTime;
        this.mediumGrowthTime = plant.mediumGrowthTime;
        this.seedUpTime = plant.seedUpTime;
        this.numberPerKg = plant.numberPerKg;
        this.alivePercent = plant.alivePercent;
        this.worm = plant.worm;
        this.wormMonth = plant.wormMonth;
    }
}

export class Plant extends PlantModel {
    _id: string;
    constructor(plant: Plant) {
        super(plant);
        this._id = plant._id;
    }
}