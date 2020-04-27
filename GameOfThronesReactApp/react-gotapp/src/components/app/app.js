import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage/';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GOTService from '../../services/gotService';


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
			<>
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
					<CharacterPage/>

					<Row>
						<Col md='6'>
								<ItemList 
								onCharSelected={this.onCharSelected}
								getData={this.gotService.getAllBooks}
								renderItem={(item) => item.name} />
						</Col>
						<Col md='6'>
								<CharDetails charId={this.state.selectedChar} />
						</Col>
					</Row>

					<Row>
						<Col md='6'>
						<ItemList 
								onCharSelected={this.onCharSelected}
								getData={this.gotService.getAllHouses}
								renderItem={(item) => `${item.name}`} />
						</Col>
						<Col md='6'>
								<CharDetails charId={this.state.selectedChar} />
						</Col>
					</Row>

				</Container>
			</>
		);
	}
};