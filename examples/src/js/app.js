/**
 * The App component just for rendering examples.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import React from 'react';
import { render } from 'react-dom';

import BasicExample from './components/BasicExample';
import AutoplayExample from './components/AutoplayExample';
import ThumbnailExample from './components/ThumbnailsExample';
import DynamicSlidesExample from './components/DynamicSlidesExample';

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import '../sass/example.scss';

/**
 * The App component just for rendering examples.
 */
class App extends React.Component {
	render() {
		return (
			<div id="examples">
				<BasicExample />
				<AutoplayExample />
				<DynamicSlidesExample />
				<ThumbnailExample />
			</div>
		);
	}
}

document.addEventListener( 'DOMContentLoaded', () => {
	render( <App/>, document.getElementById( 'app' ) );
} );