import { connect } from 'unistore/preact';
import { Counter } from '../component/Counter';
import { increment } from '../store/action';

const wrappedCounter = connect(
    ({ counter }) => ({counter}),
    { increment }
)(Counter);

export { wrappedCounter as Counter };
