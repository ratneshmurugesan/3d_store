import { createStore } from "redux";
import reducer from "../reducers";

import Models from '../../../utilities/models'

export const initialState = { models: Models.slice(0, 2) };

export const store = createStore(reducer, initialState); 