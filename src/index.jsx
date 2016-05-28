import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import TodoApp from './components/TodoApp';

export * from 'framework7';

require('../node_modules/framework7/dist/css/framework7.ios.css');
require('../node_modules/framework7/dist/css/framework7.ios.colors.css');

const todos = List.of(
	Map({id: 1, text: 'React', status: 'active', editing: false }),
	Map({id: 2, text: 'Redux', status: 'active', editing: false}),
	Map({id: 3, text: 'Immutable', status: 'completed', editing: false})
);

window.f7 = new Framework7({
	modalTitle: 'TurEZ',
	animateNavBackIcon: true,
	pushState: true,
	scrollTopOnStatusbarClick: true,
	uniqueHistoryIgnoreGetParameters: true,
	allowDuplicateUrls: true
})

window.$ = Dom7;

const tabs = {
	tours: window.f7.addView('#view-tours', {
		dynamicNavbar: true
	}),
	wishlists: window.f7.addView('#view-wishlist', {
		dynamicNavbar: true
	}),
	trips: window.f7.addView('#view-trips', {
		dynamicNavbar: true
	}),
	me: window.f7.addView('#view-me', {
		dynamicNavbar: true
	})
};

ReactDOM.render(
  <TodoApp todos={todos} />,
  document.getElementById('app')
); 