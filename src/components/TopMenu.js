/** @format */

import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart.js";

const TopMenu = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color='light' light expand='md'>
				{/* <NavbarBrand href='/'style={{color: 'red'}}>Welcome!</NavbarBrand> */}
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						<NavItem>
							<NavLink>
								<Link to='/'>Home</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link to='/products'>Products</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<CartContext.Consumer>
									{({ cartItems }) => (
										<Link to='/products'>
											Cart({cartItems.length})
										</Link>
									)}
								</CartContext.Consumer>
							</NavLink>
						</NavItem>
					</Nav>
					<NavbarText >
						Choose your products ^^
					</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default TopMenu;
