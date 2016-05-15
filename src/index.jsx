import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {Dom7, Framework7} from 'framework7';

import TodoApp from './components/TodoApp';

require('../node_modules/framework7/dist/css/framework7.ios.css');
require('../node_modules/framework7/dist/css/framework7.ios.colors.css');

const todos = List.of(
	Map({id: 1, text: 'React', status: 'active', editing: false }),
	Map({id: 2, text: 'Redux', status: 'active', editing: false}),
	Map({id: 3, text: 'Immutable', status: 'completed', editing: false})
);

window.$ = Dom7;
window.f7 = new Framework7({
	modalTitle: 'TurEZ',
	animateNavBackIcon: true,
	pushState: true,
	scrollTopOnStatusbarClick: true,
	uniqueHistoryIgnoreGetParameters: true,
	allowDuplicateUrls: true
});

const tabs = {
	tours: f7.addView('#view-tours', {
		dynamicNavbar: true
	}),
	wishlists: f7.addView('#view-wishlist', {
		dynamicNavbar: true
	}),
	trips: f7.addView('#view-trips', {
		dynamicNavbar: true
	}),
	me: f7.addView('#view-me', {
		dynamicNavbar: true
	})
};

 ReactDOM.render(
  <TodoApp todos={todos} />,
  document.getElementById('app')
); 