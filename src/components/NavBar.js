import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
  display: 'inline-block',
  width: '50px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'Blue',
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={linkStyles} activeStyle={{ color: 'grey' }}>
        Home
      </NavLink>
      <NavLink to="/movies" exact style={linkStyles} activeStyle={{ color: 'grey' }}>
        Movies
      </NavLink>
      <NavLink to="/directors" exact style={linkStyles} activeStyle={{ color: 'grey' }}>
        Directors
      </NavLink>
      <NavLink to="/actors" exact style={linkStyles} activeStyle={{ color: 'grey' }}>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
