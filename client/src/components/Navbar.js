import React from "react";
import * as $ from "jquery";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

class Navbar extends React.Component
{
    componentDidMount()
    {
        this.addHoverToNavbar();
        this.smallScreenNavbar();
    }
    smallScreenNavbar = () =>
    {
        $('.menu-button-for-navbar').click(function ()
        {
            $(".exposed-navbar").addClass("exposed");
        })
        $('.back-button-main-nav').click(function ()
        {
            $(".exposed-navbar").removeClass("exposed");
            $(".categories-nav").removeClass("exposed");
        })
        $('.back-button-cat-nav').click(function ()
        {
            $(".categories-nav").removeClass("exposed");
        })
    }
    addHoverToNavbar = () =>
    {
        /* for custom navbar */
        $(".custom-navbar").mouseenter(function ()
        {
            $(".exposed-navbar").addClass("exposed");
            $(".website-name").addClass("animate__jello");
        });
        $(".custom-navbar").mouseleave(function ()
        {
            $(".exposed-navbar").removeClass("exposed");
            $(".website-name").removeClass("animate__jello");
        });
        /* for exposed navbar */
        $(".exposed-navbar").mouseenter(function ()
        {
            $(".exposed-navbar").addClass("exposed");
            $(".website-name").addClass("animate__jello");
        });
        $(".exposed-navbar").mouseleave(function ()
        {
            $(".exposed-navbar").removeClass("exposed");
            $(".website-name").removeClass("animate__jello");
        });
        $(".categories-exposed").mouseenter(function ()
        {
            $(".categories-nav").addClass("exposed");
        });
        $(".categories-exposed").mouseleave(function ()
        {
            $(".categories-nav").removeClass("exposed");
        });
        $(".categories-nav").mouseenter(function ()
        {
            $(".website-name").addClass("animate__jello");
            $(".categories-nav").addClass("exposed");
            $(".exposed-navbar").addClass("exposed");
        });
        $(".categories-nav").mouseleave(function ()
        {
            $(".website-name").removeClass("animate__jello");
            $(".categories-nav").removeClass("exposed");
            $(".exposed-navbar").removeClass("exposed");
        });
    };
    logouthandler = (event) =>
    {
        this.props.dispatch(logout());
    };
    handleThemeToggler = (event) =>
    {
        //To be done later
    };
    render()
    {
        const { isLoggedIn } = this.props.auth;
        return (
            <React.Fragment>
                <div className="custom-navbar">
                    <div className="website-logo">
                        <i className="fas fa-seedling"></i>
                    </div>
                    <div className="buttons-container">
                        <div className="home">
                            <i className="fas fa-home"></i>
                        </div>
                        {isLoggedIn && (
                            <div className="profile">
                                <i className="fas fa-user-alt"></i>
                            </div>
                        )}
                        {!isLoggedIn && (
                            <div className="signin-button">
                                <i className="fas fa-sign-in-alt"></i>
                            </div>
                        )}
                        {!isLoggedIn && (
                            <div className="signup-button">
                                <i className="fas fa-user-plus"></i>
                            </div>
                        )}
                        {isLoggedIn && (
                            <div className="log-out">
                                <i className="fas fa-sign-out-alt"></i>
                            </div>
                        )}
                        <div className="cart">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div className="categories">
                            <i className="fas fa-sitemap"></i>
                        </div>
                        <div className="toggle-theme">
                            <i className="fas fa-exchange-alt"></i>
                        </div>
                        {isLoggedIn && (
                            <div className="sell">
                                <i className="fas fa-rupee-sign"></i>
                            </div>
                        )}
                        <div className="more-info">
                            <i className="fas fa-info-circle"></i>
                        </div>
                    </div>
                </div>
                <div className="exposed-navbar">
                    <div className="website-name animate__animated pl-4">
                        Agrimart
					</div>
                    <div className="back-button-main-nav">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <hr className="m-0 bg-warning custom-width" />
                    <div className="buttons-container-exposed">
                        <Link to="/" className="home-exposed">
                            <div>Home</div>
                        </Link>
                        {isLoggedIn && (
                            <Link to="/profile" className="profile-exposed">
                                <div>Profile</div>
                            </Link>
                        )}
                        {!isLoggedIn && (
                            <Link
                                to="/sign-in"
                                className="signin-button-exposed"
                            >
                                <div>Sign In</div>
                            </Link>
                        )}
                        {!isLoggedIn && (
                            <Link
                                to="/sign-up"
                                className="signup-button-exposed"
                            >
                                <div>Sign Up</div>
                            </Link>
                        )}
                        {isLoggedIn && (
                            <Link
                                to="/sign-in"
                                onClick={this.logouthandler}
                                className="log-out-exposed"
                            >
                                <div>Log Out</div>
                            </Link>
                        )}
                        <Link to="/cart" className="cart-exposed">
                            <div>Cart</div>
                        </Link>
                        <Link
                            to="/categories"
                            className="categories-exposed cat-button"
                        >
                            <div>
                                Categories{" "}
                                <i className="fas fa-chevron-right float-right"></i>
                            </div>
                        </Link>
                        <Link
                            to=""
                            className="toggle-theme-exposed"
                            onClick={this.handleThemeToggler}
                        >
                            <div>Toggle Theme</div>
                        </Link>
                        {isLoggedIn && (
                            <Link to="/sell" className="sell-exposed">
                                Sell on Agrimart
                            </Link>
                        )}
                        <Link to="/more-info" className="more-info-exposed">
                            <div>More Info</div>
                        </Link>
                    </div>
                </div>
                <div className="categories-nav">
                    <div className="website-name animate__animated pl-4">
                        Categories
					</div>
                    <div className="back-button-cat-nav">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <hr className="m-0 bg-danger custom-width" />
                    <div className="categories-nav-inner-container">
                        <Link to="/categories/CerealsAndPulses">
                            <div>Cereals and Pulses</div>
                        </Link>
                        <Link to="/categories/Seeds">
                            <div>Seeds</div>
                        </Link>
                        <Link to="/categories/Spices">
                            <div>Spices</div>
                        </Link>
                        <Link to="/categories/Fruits">
                            <div>Fruits</div>
                        </Link>
                        <Link to="/categories/Vegetables">
                            <div>Vegetables</div>
                        </Link>
                        <Link to="/categories/DryFruits">
                            <div>Dry Fruits</div>
                        </Link>
                        <Link to="/categories/EdibleOils">
                            <div>Edible Oils</div>
                        </Link>
                        <Link to="/categories/DairyProducts">
                            <div>Dairy Products</div>
                        </Link>
                        <Link to="/categories/Others">
                            <div>Others</div>
                        </Link>
                    </div>
                </div>
                <div className="menu-button-for-navbar">
                    <i className="fas fa-bars"></i>
                </div>
            </React.Fragment>
        );
    }
}
function mapStateToProps({ auth })
{
    return { auth };
}
export default connect(mapStateToProps)(Navbar);
