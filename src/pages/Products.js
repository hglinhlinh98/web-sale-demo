/** @format */

import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from "reactstrap";
import {CartContext} from '../context/Cart.js';
class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productslist: [],
		};
	}
	componentDidMount() {
		axios.get("https://h4pvk.sse.codesandbox.io/products").then((res) => {
			this.setState({
				productslist: res.data,
			});
		});
	}
	render() {
		const { productslist } = this.state;
		return (
			<Container>
				<Row>
					{productslist.map((productslist, index) => (
						<Col sm='4' key={`${index}`}>
							<Card>
								<CardImg
									top
									width='100%'
									src='/assets/318x180.svg'
									alt='Card image cap'
								/>
								<CardBody>
									<CardTitle>{productslist.name}</CardTitle>

									<CardText>
										{productslist.description}
									</CardText>
									<CartContext.Consumer>
										{({addToCart}) => <Button className = "btn-products" onClick ={() => addToCart(productslist)} >Add to cart</Button>}
									</CartContext.Consumer>
									
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		);
	}
}
export default Products;
