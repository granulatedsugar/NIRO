import * as ActionTypes from './ActionTypes';
import { firestore } from '../firebase/firebase';


// =============== HERO ================= //
export const fetchHero = () => (dispatch) => {

    dispatch(heroLoading());

    return firestore.collection('hero').get()
    .then(snapshot => {
        let hero = [];
        snapshot.forEach(doc => {
            const data = doc.data()
            const _id = doc.id
            hero.push({_id, ...data});
        });
        return hero;
    })
    .catch(error => dispatch(heroFailed(error.message)));
};

export const heroLoading = () => ({
    type: ActionTypes.HERO_LOADING
});

export const heroFailed = (errmess) => ({
    type: ActionTypes.HERO_FAILED,
    payload: errmess
});