import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';


import './menu-list.scss';

class MenuList extends Component {

	componentDidMount() {
		const {RestoService, menuLoaded, menuRequested, menuError} = this.props;
		
		menuRequested();
		
		RestoService.getMenuItems()
			.then(res => menuLoaded(res))
			.catch(err => {
				console.log('error in loading menu list');
				menuError();

			})
	}
	
	render() {
		const {menuItems, loading, error, addedToCart} = this.props;
	
		if (loading) {
			return <Spinner/>
		}
		
		if (error) {
			return <Error/>
		}
		
		return (
			<>
				<ul className="menu__list">
					{
						menuItems.map(menuItem => {
							return <MenuListItem
								menuItem={menuItem}
								key={menuItem.id}
								onAddToCart={() => addedToCart(menuItem.id)}
							/>
						})
					}
					
				</ul>
				<div className='icons__copyright'>
					&#169; Icons made by - <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from 
					<a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
				</div>
			</>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		menuItems: state.menu,
		loading: state.loading,
		error: state.error
	}
}

const mapDispatchToProps =  {
	menuLoaded,
	menuRequested,
	menuError,
	addedToCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));