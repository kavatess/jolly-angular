const SERVER_URL = 'http://localhost:1000';
const REQUEST_URL_HEAD = SERVER_URL + '/api/v1';
const TRUSS_REQUEST_HEAD = REQUEST_URL_HEAD + '/truss';
const PLANT_REQUEST_HEAD = REQUEST_URL_HEAD + '/plant';
const SEED_REQUEST_HEAD = REQUEST_URL_HEAD + '/seed';
const UPDATE_REQUEST = '/update';
const INSERT_REQUEST = '/insert';
const DELETE_REQUEST = '/delete';
export const TRUSS_REQUEST = {
    getTrussData: TRUSS_REQUEST_HEAD + '/block',
    getStatistics: TRUSS_REQUEST_HEAD + '/statistics',
    updateStatus: TRUSS_REQUEST_HEAD + '/update/status',
    createTruss: TRUSS_REQUEST_HEAD + '/create',
    clearTruss: TRUSS_REQUEST_HEAD + '/clear',
    updateMaxHole: TRUSS_REQUEST_HEAD + '/update/maxhole',
    revertStatus: TRUSS_REQUEST_HEAD + '/revert/status',
    getTimelineById: TRUSS_REQUEST_HEAD + '/timeline/'
}
export const PLANT_REQUEST = {
    getPlantData: PLANT_REQUEST_HEAD,
    updateOnePlant: PLANT_REQUEST_HEAD + UPDATE_REQUEST,
    insertOnePlant: PLANT_REQUEST_HEAD + INSERT_REQUEST,
    deleteOnePlant: PLANT_REQUEST_HEAD + DELETE_REQUEST
}
export const SEED_REQUEST = {
    getSeedData: SEED_REQUEST_HEAD,
    updateOneSeed: SEED_REQUEST_HEAD + UPDATE_REQUEST,
    insertManySeed: SEED_REQUEST_HEAD + INSERT_REQUEST,
    deleteManySeed: SEED_REQUEST_HEAD + DELETE_REQUEST,
    deleteOneSeed: SEED_REQUEST_HEAD + '/remove'
}