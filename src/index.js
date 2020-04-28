import {useReducer} from "react";

export const useEnhanceReducer = (reducer, initState) => {

    let [state, dispatch] = useReducer(reducer, initState);

    const enhanceDispatch = (action) => {
        if (typeof action === "function") {
            action(dispatch, state);
        } else {
            dispatch(action);
        }
    };

    return [state, enhanceDispatch]
};
