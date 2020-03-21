import { h, Fragment } from 'preact';
import { Nav } from '../Nav';
import { Counter } from '../../container/Counter';

export function About(props) {
    return (
        <>
            <Nav/>
            <h1>About</h1>
            <p>Here you can read about our site.</p>
            <Counter/>
            <div>
                <pre>
                    {JSON.stringify(props, null, 4)}
                </pre>
            </div>
        </>
    );
}
