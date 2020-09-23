import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../router/Routes';
const Header = () => {
    return (
        <div className="ui secondary pointing menu" >
            <NavLink
                to={Routes.home}
                exact={true}
                className="item">
                Homepage
            </NavLink>

            <div className="right menu">
                <NavLink
                    to={Routes.products}
                    exact={true}
                    className="item">
                    Products
                </NavLink>


            </div>

        </div>
    );
}
export default Header;
