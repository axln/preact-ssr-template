import 'preact/debug'
import { h, hydrate } from 'preact';
import { Provider } from 'unistore/preact';
import { AppRouter } from '../component/AppRouter';
import { initStore } from '../store';

const store = initStore(window.__STATE__);

window.addEventListener('DOMContentLoaded', () => {
    hydrate(
        <Provider store={store}>
            <AppRouter/>
        </Provider>,
        document.getElementById('root')
    );
});
