import createStore from 'unistore';
import { setJSONCookie } from '../lib/Helper';

export function initStore(initialState) {
    initialState = initialState || {
        counter: 0
    };

    if (DEBUG && CLIENT) {
        console.log('initialState: ', initialState);
    }

    const store = createStore(initialState);

    if (CLIENT) {
        store.subscribe(state => {
            if (DEBUG) {
                console.log('state changed:', state);
            }
            document.cookie = setJSONCookie('s', state, 7);
        });
    }
    return store;
}
