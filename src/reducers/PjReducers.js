import { useReducer } from "react";

export const PjReducer = (state, action) => {
    switch (action.type) {
        case "[Hide]":
            const hidePJ = state
            hidePJ[action.index].hide = true
            return hidePJ
            break
        default:
            return state
    }
}