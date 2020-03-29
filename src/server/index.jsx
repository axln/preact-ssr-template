import { h } from 'preact';
import { resolve } from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import render from 'preact-render-to-string';
import { Provider } from 'unistore/preact';
import { AppRouter } from '../component/AppRouter';
import { initStore } from '../store';
import { getStateFromCookies, htmlShell } from '../lib/Helper';

const server = express();
server.use(cookieParser());

function renderPage(url, state) {
    const store = initStore(state);
    const renderedString = render(
        <Provider store={store}>
            <AppRouter url={url}/>
        </Provider>
    );
    //return htmlShell(renderedString, store.getState());
    return htmlShell();
}

const staticPath = resolve(__dirname, '../../dist');
if (DEBUG) {
    console.log('static path:', staticPath);
}
server.use(express.static(staticPath, {index: false}));

server.get('*', (req, res) => {
    const state = getStateFromCookies(req.cookies);
    if (DEBUG) {
        console.log(`GET ${req.url}, state: ${JSON.stringify(state)}`);
    }
    const html = renderPage(req.url, state);
    res.end(html);
});

server.listen(8080, () => console.log('Server is listening...'));
