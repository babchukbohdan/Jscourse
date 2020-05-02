import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import './app.scss';
import Background from './food-bg.jpg';

const App = ({total}) => {
	return (
		<div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
			<AppHeader total={total}/>
			<Switch>
				<Route
					path='/' 
					exact 
					component={MainPage} />
				<Route 
					path='/cart' 
					component={CartPage} />
			</Switch>
		</div>
	)
}

const mapStateToProps = ({items}) => {
	const total = items.reduce((acc, item) => {
		return acc += item.price;
	}, 0);

	return {
		total
	}
}; 

export default connect(mapStateToProps)(App);
// export default App;