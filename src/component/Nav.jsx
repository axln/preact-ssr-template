import { h } from 'preact';
import { Link } from 'preact-router/match';

export function Nav() {
    return (
        <nav>
            <div>
                <a href='/'>Home</a>
            </div>
            <div>
                <a href='/about'>About</a>
            </div>
        </nav>
    );
}
