export interface createTrussRequest {
    _id: string;
    plantId: number;
    startDate: string;
    plantNumber: number;
    createdSeedId: string;
}

export interface updateMaxHoleRequest {
    _id: string;
    maxHole: number;
}

export interface simpleRequest {
    _id: string;
}

export interface revertTrussRequest {
    _id: string;
    statusIndex: number;
}

export interface newStatusRequest {
    _id: string;
    date: string;
    plantNumber: number;
    plantGrowth: number;
}