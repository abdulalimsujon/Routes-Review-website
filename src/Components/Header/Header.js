import React from 'react';
import CustomLink from '../customLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className="header-link">
            <div className="Link-style">
                <CustomLink to='/home'>Home</CustomLink>

            </div>
            <div className="Link-style">
                <CustomLink to='/reviews'>Reviews</CustomLink>
            </div>
            <div className="Link-style">
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
            </div>
            <div className="Link-style">
                <CustomLink to='/about'>About</CustomLink>
            </div>





        </div>
    );
};

export default Header;