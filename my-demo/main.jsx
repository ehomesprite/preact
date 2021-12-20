/* eslint-disable no-unused-vars */
/**
 * @jsx h
 */
import { Component, h, render } from '../src/index.js';

const q = (...arg) => document.querySelector(...arg);

const _renderInParent = () => {
	const app = <div className="test">1</div>;

	render(app, q('#app'));
};
// _renderInParent();

const _renderInParentWithChild = () => {
	const app = <div className="test">2</div>;

	render(app, q('#app2'));
};
// _renderInParentWithChild();

const _renderReplace = () => {
	const app = <div className="test">3</div>;

	render(app, q('#app2'), q('.app2-replace'));
};
// _renderReplace();

const _renderClassC = () => {
	class App extends Component {
		state = {
			a: 1
		};

		render(props, state) {
			return (
				<div>
					<button onClick={() => this.setState({ a: state.a + 1 })}>+</button>
					{state.a}
				</div>
			);
		}
	}

	render(<App />, q('#app'));
};

// _renderClassC();

const _renderClassUpdate = () => {
	class App extends Component {
		state = {
			a: true
		};

		render(props, state) {
			if (state.a) {
				return (
					<div>
						<button onClick={() => this.setState({ a: !state.a })}>
							toggle
						</button>
						div
					</div>
				);
			}
			return (
				<p>
					<button onClick={() => this.setState({ a: !state.a })}>toggle</button>
					p
				</p>
			);
		}
	}

	render(<App />, q('#app'));
};
// _renderClassUpdate();

const _renderClassUpdateProps = () => {
	class B extends Component {
		render(props) {
			return <div>{props.a}</div>;
		}
	}

	class App extends Component {
		state = {
			a: 1
		};

		constructor() {
			super();
			window.a = () => {
				this.setState({ a: this.state.a + 1 });
			};
		}

		render(props, state) {
			return <B a={state.a} />;
		}
	}

	render(<App />, q('#app'));
};
_renderClassUpdateProps();
