import React from 'react';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<div className="navbar">
				<NavLink to="/" exact>Home</NavLink>
				<NavLink to="/products" exact>Products</NavLink>
			</div>
		</div>
	);
};

export default NavBar;