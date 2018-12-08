import { ADD_MODELS, ADD_PAGINATION } from '../actions'

import Models from '../../../utilities/models'
import initialState from '../reduxStore/'

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_MODELS:

            console.log('ADD_MODELS: ' + action.modelName)
            let actionModelName = action.modelName

            state.models.map((model, index) => {
                for (var key in model) {
                    if (model[key] === action.modelName) {
                        state[actionModelName] = model.models.length
                        //model.models = model.models.slice(0, state[action.modelName] + action.modelCount)
                    }
                }
            })

            Models.map((model, index) => {
                for (var key in model) {
                    if (model[key] === action.modelName) {
                        model.models = model.models.slice(0, state[action.modelName] + action.modelCount)
                    }
                }
            })

            return Object.assign({}, state, {
                models: Models
            })

        case ADD_PAGINATION:
            console.log('ADD_PAGINATION: ' + state.models.length)
            return Object.assign({}, state, {
                models: Models.slice(0, state.models.length + action.paginationCount)
            });
        default:
            return state;
    }

}