//import Paginations from '../../../utilities/paginations'

export const paginationReducer = (state = 2, action) => {
    switch (action.type) {
        case "ADD_PAGINATION":
            return state + 1
        default:
            return state;
    }
}