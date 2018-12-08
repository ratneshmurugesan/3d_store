export const ADD_MODELS = 'ADD_MODELS'
export const ADD_PAGINATION = 'ADD_PAGINATION'

export function addPagination(paginationCount, index) {
    return {
        id: index,
        type: ADD_PAGINATION,
        paginationCount: paginationCount
    }
}

export function addModels(modelName, modelCount, index) {
    return {
        id: index,
        type: ADD_MODELS,
        modelName: modelName,
        modelCount: modelCount
    }
}

