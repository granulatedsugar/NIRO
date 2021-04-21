import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';


export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            // web: Web,
            // mobile: Mobile,
            // design: Design,
            // hero: Hero,
            // ...createForms({
            //     contact: ContactForm
            // })
        }),
        applyMiddleware(thunk, logger)
    )
    return store;
}
