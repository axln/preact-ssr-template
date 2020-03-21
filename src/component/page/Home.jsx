import { h, Fragment } from 'preact';
import { Nav } from '../Nav';
import { Counter } from "../../container/Counter";

export function Home(props) {
    return (
        <>
            <Nav/>
            <h1>Home Page</h1>
            <p>Welcome to our site.</p>
            <Counter/>
            <div>
                <pre>
                    {JSON.stringify(props, null, 4)}
                </pre>
            </div>
        </>
    );
}
