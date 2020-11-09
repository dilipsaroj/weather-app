import React from 'react';
import {NavLink} from 'react-router-dom';

 const Menu = () => {
    return (
        <div className="menu_style">
            <NavLink exact activeClassName="active_class" to="/">Daily Forecast</NavLink>
            <NavLink exact activeClassName="active_class" to="/forecast">Upcoming Forecast</NavLink>
        </div>
    )
}
export default Menu;