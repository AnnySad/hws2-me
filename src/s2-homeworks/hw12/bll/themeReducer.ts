
export type changeThemeIdAT={
    type: 'SET_THEME_ID',
    id: number
}
export type ActionType = changeThemeIdAT

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): any=> {
    switch (action.type) {
        case "SET_THEME_ID":{
            return {
                ...state,
                themeId: action.id
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdAT => ({ type: 'SET_THEME_ID', id })



