import { h } from 'preact';
import { Link } from 'preact-router/match';
import './nav.scss';

export function Nav() {
    return (
        <nav>
            <div>
                <Link href='/' activeClassName='active'>Home</Link>
            </div>
            <div>
                <Link href='/about' activeClassName='active'>About</Link>
            </div>
        </nav>
    );
}
