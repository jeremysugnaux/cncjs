import constants from 'namespace-constants';
import { createAction } from 'redux-action';

const NS = 'connection';
const asyncTypes = ['REQUEST', 'SUCCESS', 'FAILURE'];

export const {
    OPEN_CONNECTION,
    CLOSE_CONNECTION,
    UPDATE_CONNECTION,
} = constants(NS, {
    'OPEN_CONNECTION': asyncTypes,
    'CLOSE_CONNECTION': asyncTypes,
    'UPDATE_CONNECTION': 'UPDATE_CONNECTION',
});

export const openConnection = createAction(OPEN_CONNECTION.REQUEST);
export const closeConnection = createAction(CLOSE_CONNECTION.REQUEST);
export const updateConnection = createAction(UPDATE_CONNECTION);