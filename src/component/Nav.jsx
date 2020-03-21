import { h } from 'preact';
import { Link } from 'preact-router/match';

export function Nav() {
    return (
        <nav>
            <div>
                <Link href='/'>Home</Link>
            </div>
            <div>
                <Link href='/about'>About</Link>
            </div>
        </nav>
    );
}
