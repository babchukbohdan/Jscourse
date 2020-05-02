import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCart, addSameToCart, removeCategoryFromCart} from '../../actions';

const CartTable = ({items, deleteFromCart, addSameToCart, removeCategoryFromCart}) => {

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

	
	
	return (
		<>
			<div className="cart__title">Ваш заказ:</div>
			<div className="cart__list">
				{
					newArr.map(item => {
						const {title, price, url, id, count, category} = item;
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
								<div onClick={() => {removeCategoryFromCart(category)}} className="cart__close">&times;</div>
							</div>
						)
					})
				}
				
			</div>
		</>
	);
};

const mapStateToProps = ({items}) => {
	return {
		items
	}
};

const mapDispatchToProps =  {
	deleteFromCart,
	addSameToCart,
	removeCategoryFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);