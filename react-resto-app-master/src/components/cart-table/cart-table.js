import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {deleteFromCart, addSameToCart, removeAllSameFromCart} from '../../actions';
import WithRestoService from '../hoc/';

import './cart-table.scss';
import '../app-header/app-header.scss';


const CartTable = ({items, deleteFromCart, addSameToCart, removeAllSameFromCart, RestoService}) => {

	let newArr = items.sort((a, b) =>  a.id - b.id).reduce((arr, el) => {
    if(!arr.length || arr[arr.length - 1].id !== el.id) {
			el.count = 1;
      arr.push(el);
    } else {
			const idx = arr.findIndex((cart) => cart.id === el.id);
			arr[idx].count++;
		}
    return arr;
	}, []);

	if (!items.length) {
		return (
			<div className="cart__title">Сделайте заказ из :&#160;
				<Link className="cart__link" to="/">
					Menu
				</Link>
			</div>
		)
	}
	
	return (
		<>
			<div className="cart__title">Ваш заказ:</div>
			<div className="cart__list">
				{
					newArr.map(item => {
						const {title, price, url, id, count} = item;
						return (
							<div className="cart__item" key={id}>
								<img src={url} className="cart__item-img" alt={title}></img>
								<div className="cart__item-title">{title}</div>
								<div className="cart__item-count">
									<button onClick={() => {deleteFromCart(id)	}} className='cart__item-count__input' >-</button>
									<button onClick={() => {addSameToCart(id)	}} className='cart__item-count__input' >+</button>
										{count} шт. &times; {price}$
									</div>
								<div className="cart__item-price">всего: {price * count}$</div>
								<div onClick={() => {removeAllSameFromCart(id)}} className="cart__close">&times;</div>
							</div>
						)
					})
				}
				
			</div>
			<div className="cart__submit">
				<button 
					onClick={() => {RestoService.setOrder( generateOrder(newArr))}}
					className='menu__btn'>Submit</button>
				<button 
				onClick={() => {RestoService.clearOrder()}}
				className='menu__btn'>Clear orders</button>
			</div>
		</>
	);
};

const generateOrder = (items) => {
	const newOrder = items.map(item => {
			return {
					id: item.id,
					qtty: item.count
			}
	})
	return newOrder;
}

const mapStateToProps = ({items}) => {
	return {
		items
	}
};

const mapDispatchToProps =  {
	deleteFromCart,
	addSameToCart,
	removeAllSameFromCart
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));