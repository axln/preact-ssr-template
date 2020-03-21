import { h } from 'preact';

export function Counter({ counter, increment }) {
    return (
        <div>
            <div>Counter: {counter}</div>
            <div>
                <button onClick={() => increment(-1)}>Decrement</button>
                <button onClick={() => increment()}>Increment</button>
            </div>
        </div>
    );
}
