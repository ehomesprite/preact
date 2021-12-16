/**
 * @jsx h
 */
import { render, h } from '../src/index.js';

const _renderInParent = () => {
	const q = (...arg) => document.querySelector(...arg);

	const app = <div className="test">1</div>;

	render(app, q('#app'));
};

_renderInParent();
