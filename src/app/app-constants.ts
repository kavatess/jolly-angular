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
const TRUSS_API_ROUTE_BEGIN = API_REQUEST_BEGIN + '/truss';
const PLANT_API_ROUTE_BEGIN = API_REQUEST_BEGIN + '/plant';
const SEED_API_ROUTE_BEGIN = API_REQUEST_BEGIN + '/seed';
const UPDATE_ROUTE = '/update';
const INSERT_ROUTE = '/insert';
const DELETE_ROUTE = '/delete';
export const TRUSS_REQUEST = {
    getTrussData: TRUSS_API_ROUTE_BEGIN + '/block',
    getRawTrussData: TRUSS_API_ROUTE_BEGIN + '/raw',
    getStatistics: TRUSS_API_ROUTE_BEGIN + '/statistics',
    updateStatus: TRUSS_API_ROUTE_BEGIN + '/status/update',
    createTruss: TRUSS_API_ROUTE_BEGIN + '/create',
    clearTruss: TRUSS_API_ROUTE_BEGIN + '/clear',
    updateMaxHole: TRUSS_API_ROUTE_BEGIN + '/maxhole/update',
    revertStatus: TRUSS_API_ROUTE_BEGIN + '/status/revert',
    getHistoryData: TRUSS_API_ROUTE_BEGIN + '/history',
    getHarvestStatsByDate: TRUSS_API_ROUTE_BEGIN + '/records/date',
    getHarvestStatsByMonth: TRUSS_API_ROUTE_BEGIN + '/records/month',
    getHarvestStatsByYear: TRUSS_API_ROUTE_BEGIN + '/records/year',
}
export const PLANT_REQUEST = {
    getPlantData: PLANT_API_ROUTE_BEGIN,
    updateOnePlant: PLANT_API_ROUTE_BEGIN + UPDATE_ROUTE,
    insertOnePlant: PLANT_API_ROUTE_BEGIN + INSERT_ROUTE,
    deleteOnePlant: PLANT_API_ROUTE_BEGIN + DELETE_ROUTE
}
export const SEED_REQUEST = {
    getSeedData: SEED_API_ROUTE_BEGIN,
    updateOneSeed: SEED_API_ROUTE_BEGIN + UPDATE_ROUTE,
    insertManySeed: SEED_API_ROUTE_BEGIN + INSERT_ROUTE,
    deleteManySeed: SEED_API_ROUTE_BEGIN + DELETE_ROUTE,
    deleteOneSeed: SEED_API_ROUTE_BEGIN + '/remove'
}
export const UPLOAD_IMGBB_REQUEST = 'https://api.imgbb.com/1/upload';