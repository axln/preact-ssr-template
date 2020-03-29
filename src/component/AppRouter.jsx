import { h } from 'preact';
import Router from 'preact-router';
import { Home } from './page/Home';
import { About } from './page/About';
import { createHashHistory } from "history";

export function AppRouter({ url }) {
    const props = {};
    if (url ) {
        props.url = url;
    }
    if (CLIENT) {
        props.history = createHashHistory({
            basename: '/'
        });
    }
    return (
        <Router {...props}>
            <Home path=''/>
            <About path='about'/>
        </Router>
    );
}
