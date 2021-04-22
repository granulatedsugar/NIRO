import * as ActionTypes from './ActionTypes';

export const Hero = (state =  { isLoading: true,
                                errMess: null,
                                hero:[]}, action) => {
    switch (action.type) {
        
        case ActionTypes.HERO_LOADING:
            return {...state, isLoading: false, errMess: null, hero: []}
        
        case ActionTypes.HERO_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        
        default:
            return state;
    }
};