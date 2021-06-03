// WEBAPP CONSTANTS
// STORAGE COLLECTION
export enum LOCAL_STORAGE_KEY {
    TOKEN = 'token',
    USER = 'user'
}
export enum SESSION_STORAGE_KEY {
    TRUSS = 'truss-arr-block-',
    RAW_TRUSS = 'raw-truss-arr-block-',
    SEED = 'seed-arr',
    PLANT = 'plant-arr',
    FARM_LAST_BLOCK = 'farm-last-block',
    STAT_LAST_BLOCK = 'stat-last-block'
}
// BASIC CONSTANTS
export const BLOCK_ARR = ['A', 'B', 'BN', 'BS', 'C', 'CT', 'D'];
export const DEFAULT_STATISTIC_REQ_BODY = {
    block: '',
    plantGrowth: 0,
    plantId: ''
}
export enum TRUSS_NUMBER {
    block_A = 33,
    block_B = 33,
    block_BS = 15,
    block_BN = 8,
    block_C = 16,
    block_CT = 12,
    block_D = 7
}
// API REQUEST URLs CONSTANTS
const SERVER_URL = 'http://localhost:1000';
export const AUTH_REQUEST_BEGIN = SERVER_URL + '/api/auth';
const API_REQUEST_BEGIN = SERVER_URL + '/api/v1';
const TRUSS_REQUEST_BEGIN = API_REQUEST_BEGIN + '/truss';
const PLANT_REQUEST_BEGIN = API_REQUEST_BEGIN + '/plant';
const SEED_REQUEST_BEGIN = API_REQUEST_BEGIN + '/seed';
const UPDATE_ROUTE = '/update';
const INSERT_ROUTE = '/insert';
const DELETE_ROUTE = '/delete';
export const TRUSS_REQUEST = {
    getTrussData: TRUSS_REQUEST_BEGIN + '/block',
    getRawTrussData: TRUSS_REQUEST_BEGIN + '/raw',
    getStatistics: TRUSS_REQUEST_BEGIN + '/statistics',
    updateStatus: TRUSS_REQUEST_BEGIN + '/status/update',
    createTruss: TRUSS_REQUEST_BEGIN + '/create',
    clearTruss: TRUSS_REQUEST_BEGIN + '/clear',
    updateMaxHole: TRUSS_REQUEST_BEGIN + '/maxhole/update',
    revertStatus: TRUSS_REQUEST_BEGIN + '/status/revert',
    getTimelineById: TRUSS_REQUEST_BEGIN + '/history'
}
export const PLANT_REQUEST = {
    getPlantData: PLANT_REQUEST_BEGIN,
    updateOnePlant: PLANT_REQUEST_BEGIN + UPDATE_ROUTE,
    insertOnePlant: PLANT_REQUEST_BEGIN + INSERT_ROUTE,
    deleteOnePlant: PLANT_REQUEST_BEGIN + DELETE_ROUTE
}
export const SEED_REQUEST = {
    getSeedData: SEED_REQUEST_BEGIN,
    updateOneSeed: SEED_REQUEST_BEGIN + UPDATE_ROUTE,
    insertManySeed: SEED_REQUEST_BEGIN + INSERT_ROUTE,
    deleteManySeed: SEED_REQUEST_BEGIN + DELETE_ROUTE,
    deleteOneSeed: SEED_REQUEST_BEGIN + '/remove'
}
export const UPLOAD_IMGBB_REQUEST = 'https://api.imgbb.com/1/upload';