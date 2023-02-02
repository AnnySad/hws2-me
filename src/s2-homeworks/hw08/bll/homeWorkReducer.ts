import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case "sort": {
            return [...state]
                .sort((a, b) => {
                    return a.name > b.name
                        ? (action.payload === 'up'
                            ? 1
                            : -1 )
                        : a.name < b.name
                            ? (action.payload === 'up'
                                ? -1
                                : 1 )
                            : 0
                })
            // by name
           /* if (action.payload === "up") {
            } else {
                return [...state]
                    .sort(function (a, b) {
                    return a.name > b.name ? -1 : a.name < b.name ? 1 : 0
                })

            }

            return action.payload === "up"
                ? [...state].sort((a, b) => {

                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                })

                : [...state].sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    }
                    return 0
                })*/
        }


        case 'check': {

            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
