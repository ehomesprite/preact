/**
 * @jsx h
 */
import { render, h } from '../src/index';

const q = (...arg) => document.querySelector(...arg);

const app = <div>1</div>;

render(app, q('#app'));

// console.log('1');
