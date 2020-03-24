import { h } from 'preact';
import Router from 'preact-router';
import { Home } from './page/Home';
import { About } from './page/About';
import './style.scss';

export function AppRouter({ url }) {
    return (
        <Router url={url}>
            <Home path='/'/>
            <About path='/about'/>
        </Router>
    );
}
