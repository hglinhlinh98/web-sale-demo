/** @format */

import React, { Component } from "react";
export const CartContext = React.createContext();



export class CartProvider extends Component {
	
	constructor(props) {
		super(props);

		let cardItems = localStorage.getItem("cardItems");
		this.state = {
			cartItems: !cardItems ? [] : JSON.parse(cardItems),
		  };
		this.addToCart = this.addToCart.bind(this);
		
	}
	
	addToCart(product) {	
		const cardItems = [...this.state.cartItems, product];
		// console.log('cI: ',cardItems);		
		this.setState({
			cartItems: cardItems,
		});
		localStorage.setItem('cardItems', JSON.stringify(cardItems)); 
	}
	render() {
		return (
			<CartContext.Provider
				value={{
					cartItems: this.state.cartItems,
					addToCart: this.addToCart,
				}}>
				{this.props.children}
			</CartContext.Provider>
		);
	}
}
