import { h, render } from 'preact';
import { Provider } from 'unistore/preact';
import { AppRouter } from '../component/AppRouter';
import { initStore } from '../store';

const store = initStore(window.__STATE__);

window.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
            <AppRouter/>
        </Provider>,
        document.getElementById('root')
    );
});
