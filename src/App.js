/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TopMenu from "./components/TopMenu.js";
import Products from "./pages/Products.js";
import { CartProvider } from './context/Cart.js';
import ecommerce from './images/ecommerce.svg';

export default function App() {
	return (
		<CartProvider>
			<Router>
				<div className='App'>
					<TopMenu />
					<Switch>
						<Route path='/products'>
							<Products />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
						
					</Switch>
				</div>
			</Router>
		</CartProvider>
		
	);
}

function Home() {
	return(
		<div className = "homePage">
			<h2 style={{color: 'red'}} >Welcome to my website!</h2>
			<img src = {ecommerce} alt="img" />
		</div>
		

	) 
}

// export default App;
