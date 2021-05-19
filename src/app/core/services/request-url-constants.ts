// API REQUEST URLs CONSTANTS
export const SERVER_URL = 'http://localhost:1000';
const REQUEST_URL_BEGIN = SERVER_URL + '/api/v1';
const TRUSS_REQUEST_BEGIN = REQUEST_URL_BEGIN + '/truss';
const PLANT_REQUEST_BEGIN = REQUEST_URL_BEGIN + '/plant';
const SEED_REQUEST_BEGIN = REQUEST_URL_BEGIN + '/seed';
const UPDATE_ROUTE = '/update';
const INSERT_ROUTE = '/insert';
const DELETE_ROUTE = '/delete';
export const TRUSS_REQUEST = {
    getTrussData: TRUSS_REQUEST_BEGIN + '/block',
    getRawTrussData: TRUSS_REQUEST_BEGIN + '/raw',
    getStatistics: TRUSS_REQUEST_BEGIN + '/statistics',
    updateStatus: TRUSS_REQUEST_BEGIN + '/update/status',
    createTruss: TRUSS_REQUEST_BEGIN + '/create',
    clearTruss: TRUSS_REQUEST_BEGIN + '/clear',
    updateMaxHole: TRUSS_REQUEST_BEGIN + '/update/maxhole',
    revertStatus: TRUSS_REQUEST_BEGIN + '/revert/status',
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