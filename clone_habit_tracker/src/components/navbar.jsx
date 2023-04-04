import React, {memo} from 'react';

const Navbar =memo( ({totalCount}) => (
    <nav className="navbar">
        <span className="navbar-logo"> <i className='fas fa-leaf'></i> </span>
        <span>Habit Tracker</span>
        <span className="navbar-count">{totalCount}</span>
    </nav>
));

export default Navbar;
