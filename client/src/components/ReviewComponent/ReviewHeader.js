import React from "react";
import { connect } from "react-redux";
import roundTo from "round-to";

class ReviewHeader extends React.Component
{
    render()
    {
        if (this.props.product.inProgress)
        {
            return (
				<div className="spinner-border text-warning text-center" role="status">
  <span className="sr-only">Loading...</span>
</div>
			);
        }
        const { singleProduct: product } = this.props.product;
        const { revLength } = this.props;//length of the reviews array
        return (
            <div>
                <div className="d-flex justify-content-around align-items-center flex-row flex-wrap">
                    <div className="d-flex justify-content-center align-items-center flex-column ratings-desc m-1 p-2">
                        <div>
                            <h2 className="m-0">
                                {!product.reviews.length
                                    ? 0
                                    : roundTo(
                                        (product.one * 1 +
                                            product.two * 2 +
                                            product.three * 3 +
                                            product.four * 4 +
                                            product.five * 5) /
                                        product.reviews.length,
                                        2
                                    )}{" "}
                                {!revLength ? (
                                    <span>
                                        <i className="fas fa-star main-star"></i>
                                    </span>
                                ) : (
                                        <span style={{ color: "#0030c4" }}>
                                            {/* when i removed the span and applied color style directly to the "i" tag, the the color didn't change due to some reason. span behaves as a wrapper to the "i" tag, which will definitely change the color of svg inside it!*/}
                                            <i className="fas fa-star main-star"></i>
                                        </span>
                                    )}

                            </h2>
                        </div>
                        <div>
                            <p className="m-0">
                                {" "}
                                {product.one +
                                    product.two +
                                    product.three +
                                    product.four +
                                    product.five}{" "}
								ratings &
							</p>
                        </div>
                        <div>
                            <p className="m-0">
                                {product.reviews.length} reviews
							</p>
                        </div>
                    </div>
                    <small className="d-flex justify-content-center align-items-center flex-column p-2 m-1">
                        <div className="d-flex justify-content-center align-items-center flex-row">
                            <div>
                                <p className="m-0">
                                    5 <i className="fas fa-star"></i>
                                </p>
                            </div>
                            <div>
                                <div className="bar">
                                    <div
                                        id="five"
                                        className="filler"
                                        style={{
                                            width:
                                                (product.five /
                                                    product.reviews.length) *
                                                120 || 0
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div>{product.five}</div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-row">
                            <div>
                                <p className="m-0">
                                    4 <i className="fas fa-star"></i>
                                </p>
                            </div>
                            <div>
                                <div className="bar">
                                    <div
                                        id="four"
                                        className="filler"
                                        style={{
                                            width:
                                                (product.four /
                                                    product.reviews.length) *
                                                120 || 0
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div>{product.four}</div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-row">
                            <div>
                                <p className="m-0">
                                    3 <i className="fas fa-star"></i>
                                </p>
                            </div>
                            <div>
                                <div className="bar">
                                    <div
                                        id="three"
                                        className="filler"
                                        style={{
                                            width:
                                                (product.three /
                                                    product.reviews.length) *
                                                120 || 0
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div>{product.three}</div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-row">
                            <div>
                                <p className="m-0">
                                    2 <i className="fas fa-star"></i>
                                </p>
                            </div>
                            <div>
                                <div className="bar">
                                    <div
                                        id="two"
                                        className="filler"
                                        style={{
                                            width:
                                                (product.two /
                                                    product.reviews.length) *
                                                120 || 0
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div>{product.two}</div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-row">
                            <div>
                                <p className="m-0">
                                    1 <i className="fas fa-star"></i>
                                </p>
                            </div>
                            <div>
                                <div className="bar">
                                    <div
                                        id="one"
                                        className="filler"
                                        style={{
                                            width:
                                                (product.one /
                                                    product.reviews.length) *
                                                120 || 0
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div>{product.one}</div>
                        </div>
                    </small>
                </div>
            </div>
        );
    }
}
function mapStateToProps({ product })
{
    return { product };
}
export default connect(mapStateToProps)(ReviewHeader);
