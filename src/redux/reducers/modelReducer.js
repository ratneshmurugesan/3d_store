import Models from '../../../utilities/models'

export const modelReducer = (state = Models, action) => {
    return state;
    // switch (action.type) {
    //     case "ADD_ANIMAL":
    //         return state.map((obj) => (
    //             obj.name === action.name ?
    //                 { ['name']: obj.name, ['models']: obj.models.slice(0, 3) } :
    //                 { ['name']: obj.name, ['models']: obj.models })
    //         );
    //     case "ADD_FOOD":
    //         return state.map((obj) => (
    //             obj.name === action.name ?
    //                 { ['name']: obj.name, ['models']: obj.models.slice(0, 3) } :
    //                 { ['name']: obj.name, ['models']: obj.models })
    //         );
    //     case "ADD_FURNITURE":
    //         return state.map((obj) => (
    //             obj.name === action.name ?
    //                 { ['name']: obj.name, ['models']: obj.models.slice(0, 3) } :
    //                 { ['name']: obj.name, ['models']: obj.models })
    //         );
    //     case "ADD_NATURE":
    //         return state.map((obj) => (
    //             obj.name === action.name ?
    //                 { ['name']: obj.name, ['models']: obj.models.slice(0, 3) } :
    //                 { ['name']: obj.name, ['models']: obj.models })
    //         );
    //     case "ADD_TECHNOLOGY":
    //         return state.map((obj) => (
    //             obj.name === action.name ?
    //                 { ['name']: obj.name, ['models']: obj.models.slice(0, 3) } :
    //                 { ['name']: obj.name, ['models']: obj.models })
    //         );
    //     case "ADD_TRANSPORT":
    //         return state.map((obj) => (
    //             obj.name === action.name ?
    //                 { ['name']: obj.name, ['models']: obj.models.slice(0, 3) } :
    //                 { ['name']: obj.name, ['models']: obj.models })
    //         );
    //     default:
    //         return state;
    // }
}