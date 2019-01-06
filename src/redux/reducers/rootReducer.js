import { combineReducers } from "redux";

import { modelReducer } from "../reducers/modelReducer";
import { paginationReducer } from "../reducers/paginationReducer";
import { modelCountReducer } from "../reducers/modelCountReducer";

export const reducers = combineReducers({
    models: modelReducer,
    modelCount: modelCountReducer,
    paginationCount: paginationReducer
})