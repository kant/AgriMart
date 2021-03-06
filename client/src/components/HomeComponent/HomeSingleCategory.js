import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URLS } from "../../helpers/urls";

const MenuItem = ({ text }) =>
{
    return <div className={`menu-item`}>{text}</div>;
};

export const Menu = (list) =>
    list.map((el, index) =>
    {
        const { name } = el;

        return <MenuItem text={name} key={index} />;
    });

const Arrow = ({ text, className }) =>
{
    return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({
    text: <i className="fas fa-angle-left"></i>,
    className: "arrow-prev"
});

const ArrowRight = Arrow({
    text: <i className="fas fa-angle-right"></i>,
    className: "arrow-next"
});

class HomeSingleCategory extends React.Component
{
    render()
    {
        if (this.props.auth.inProgress)
        {
            return (
				<div
					style={{ height: "100vh", width: "100%" }}
					className="d-flex flex-column justify-content-center align-items-center ml-auto mr-auto"
				>
					<div
						className="spinner-border text-danger"
						role="status"
						style={{ width: "10rem", height: "10rem" }}
					>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			);
        }
        if (!this.props.products)
        {
            return <p className="pl-3">Nothing To Show Here!</p>;
        }

        /* Fill up the list here! */
        this.list = []
        for (let product of this.props.products)
        {
            this.list.push({
                name: (
                    <Link to={`/view-product/${product._id}/${this.props.auth.user._id}`} className="card prod-card" style={{ width: '10rem', backgroundColor: 'transparent' }}>
                        <div
                            style={{
                                height: 200,
                                backgroundImage: `url('${API_URLS.productImageRoot()}${product.coverImage.split('-')[1]}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                        <div className="card-body text-capitalize bottom-side-of-card">
                            <h5 key={product._id}>{product.name}</h5>
                            <p key={`${product._id}-details`} className="card-text">
                                <b>Rs. {product.price}</b>
                            </p>
                        </div>
                    </Link>
                )
            });
        }
        this.menuItems = Menu(this.list);
        const menu = this.menuItems;
        return (
            <ScrollMenu
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                alignCenter={true}
                alignOnResize={true}
                wheel={false}
                hideArrows={true}
                scrollBy={1}
            />
        );
    }
}
function mapStateToProps({ auth })
{
    return { auth };
}
export default connect(mapStateToProps)(HomeSingleCategory);
