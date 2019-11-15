export const _SET_CHANGER_FULL_INFORMATION = (payload) =>{
    return {
        type: 'SET_CHANGER_FULL_INFORMATION',
        payload,
    }
}

export const _SET_CHANGER_INFORMATION = (id, action) => {
    return {
        type: 'SET_CHANGER_INFORMATION',
        payload: {id: id, action: action},
    }
}