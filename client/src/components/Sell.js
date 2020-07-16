import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { createProduct } from "../actions/product";

class Sell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			image: "",
			price: "",
			description: "",
			category: "",
            minimumOrderQuantity: "",
		};
	}

	formInputHandler = (property, event) => {
		this.setState({
			[property]: event.target.value
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(createProduct(this.state, this.props.auth.user._id));
	};

	render() {
        const {isLoggedIn}=this.props.auth;
        if(!isLoggedIn)
        {
            return <Redirect to="/sign-in"/>
        }
		return (
			<div className="sell-component">
				<div className="container-fluid bg-warning">
					<div className="row">
						<div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-xl-6 offset-xl-3 bg-light my-5 p-5">
							<h1 className="text-center pb-4">
								Start Selling...
							</h1>
							<form>
								<div className="form-group">
									<label htmlFor="name">Entity Name</label>
									<input
										type="text"
										className="form-control"
										id="name"
										aria-describedby="name"
										placeholder="Enter Entity name here"
										required
										onChange={(event) => {
											this.formInputHandler(
												"name",
												event
											);
										}}
										value={this.state.name}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">Price</label>
									<input
										type="number"
										className="form-control"
										id="email"
										aria-describedby="email"
										placeholder="Price of the entity"
										required
										onChange={(event) => {
											this.formInputHandler(
												"price",
												event
											);
										}}
										value={this.state.price}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="image">Image Url</label>
									<input
										type="text"
										className="form-control"
										id="image"
										aria-describedby="image"
										placeholder="URL of the image"
										required
										onChange={(event) => {
											this.formInputHandler(
												"image",
												event
											);
										}}
										value={this.state.image}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="description">
										Description
									</label>
									<input
										type="text"
										className="form-control"
										id="description"
										aria-describedby="description"
										placeholder="Describe this entity"
										required
										onChange={(event) => {
											this.formInputHandler(
												"description",
												event
											);
										}}
										value={this.state.description}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="category">Category</label>
									<input
										type="text"
										className="form-control"
										id="category"
										aria-describedby="category"
										placeholder="Category of entity"
										required
										onChange={(event) => {
											this.formInputHandler(
												"category",
												event
											);
										}}
										value={this.state.category}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="min-qty">
										Minimum Order Quantity
									</label>
									<input
										type="number"
										className="form-control"
										id="min-qty"
										aria-describedby="min-qty"
										placeholder="Minimum cost of the entity"
										required
										onChange={(event) => {
											this.formInputHandler(
												"minimumOrderQuantity",
												event
											);
										}}
										value={this.state.minimumOrderQuantity}
									/>
								</div>
								<button
									type="submit"
									className="btn btn-primary"
									onClick={this.handleSubmit}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ product, auth }) {
	return { product, auth };
}

export default connect(mapStateToProps)(Sell);
