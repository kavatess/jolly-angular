export interface Statistics {
    plantName: string;
    plantColor: string;
    plantNumber: number;
    numberPerKg: number;
}

export interface HarvestStatByDate {
    date: string;
    harvestNumber: any[];
}