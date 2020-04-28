import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import GOTService from '../../services/gotService';
import {CharacterPage, BookPage, HousePage, BooksItem} from '../pages';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import './app.css';


export default class App extends Component {
	gotService = new GOTService();
	state = {
		showRandomChar: true,
		error: false
	}

	componentDidCatch() {
		console.log('error');
		this.setState({
			error: true
		})
	}

	toggleRandom = () => {
		this.setState( ({showRandomChar}) => {
			return {
				showRandomChar: !showRandomChar
			}
		})
	}

	render() {
		const {showRandomChar} = this.state;
		const random = showRandomChar ? <RandomChar/> : null;

		if (this.state.error) {
			return <ErrorMessage/>
		}

		return (
			<Router>
				<div className='app'>
					<Container>
						<Header />
					</Container>
					<Container>
						<Row>
							<Col lg={{size: 5, offset: 0}}>
								{random}

								<button
									className="mb-4 btn btn-secondary"
									onClick={this.toggleRandom} >
										Toggle random char
								</button>
							</Col>
						</Row>
						<Route path='/' exact component={() => <h1>Hello I'm lindy lohan</h1>} />
						<Route path='/characters' component={CharacterPage} />
						<Route path='/houses' component={HousePage} />
						<Route path='/books' exact component={BookPage} />

						<Route path='/books/:id' render={
							({match}) => {
								const {id} = match.params;
								return <BooksItem bookId={id} />
							}
						} />

						
					</Container>
				</div>
			</Router>
		);
	}
};