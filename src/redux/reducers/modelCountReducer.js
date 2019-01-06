const modelCount = { 'Animals': 3, 'Foods': 3, 'Furniture': 3, 'Nature': 3, 'Technology': 3, 'Transport': 3 }

export const modelCountReducer = (state = modelCount, action) => {
    switch (action.type) {
        case "ANIMAL_COUNT":
            return state[action.name] !== undefined ? Object.assign({}, state, { 'Animals': state.Animals + 1 }) : state
        case "FOOD_COUNT":
            return state[action.name] !== undefined ? Object.assign({}, state, { 'Foods': state.Foods + 1 }) : state
        case "FURNITURE_COUNT":
            return state[action.name] !== undefined ? Object.assign({}, state, { 'Furniture': state.Furniture + 1 }) : state
        case "NATURE_COUNT":
            return state[action.name] !== undefined ? Object.assign({}, state, { 'Nature': state.Nature + 1 }) : state
        case "TECHNOLOGY_COUNT":
            return state[action.name] !== undefined ? Object.assign({}, state, { 'Technology': state.Technology + 1 }) : state
        case "TRANSPORT_COUNT":
            return state[action.name] !== undefined ? Object.assign({}, state, { 'Transport': state.Transport + 1 }) : state
        default:
            return state;
    }
}