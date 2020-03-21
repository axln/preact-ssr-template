import { h } from 'preact';
import Router from 'preact-router';
import { Home } from './page/Home';
import { About } from './page/About';

export function AppRouter({ url }) {
    return (
        <Router url={url}>
            <Home path='/'/>
            <About path='/about'/>
        </Router>
    );
}
