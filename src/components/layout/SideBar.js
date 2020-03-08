import React from 'react';

const sideBar = props => {
    const isActiveRoute = (route) => {
        return window.location.pathname.indexOf(route) !== -1;
    };
    return (
        <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="/dashboard">Apple</a>
                </div>
                <div className="sidebar-brand sidebar-brand-sm">
                    <a href="/dashboard">AP</a>
                </div>
                <ul className="sidebar-menu">
                    <li className={`menu-header`}>Mac</li>
                    <li className={`nav-item ${isActiveRoute("Accueil") ? 'active' : ''}`}>
                        <a href='/dashboard' className='nav-link'>
                            <i className="fas fa-fire" /><span>Mac</span>
                        </a>
                    </li>
                    <li className={`nav-item ${isActiveRoute("page") ? 'active' : ''}`}>
                        <a href='/cart' className='nav-link'>
                            <i className="fas fa-lightbulb" /><span>Ipad</span>
                        </a>
                    </li>
                    <li className={`nav-item ${isActiveRoute("characters") ? 'active' : ''}`}>
                        <a href='/characters' className='nav-link'>
                            <i className="fas fa-lightbulb" /><span>Iphone</span>
                        </a>
                    </li>
                    <li className={`nav-item ${isActiveRoute("characters") ? 'active' : ''}`}>
                        <a href='/characters' className='nav-link'>
                            <i className="fas fa-lightbulb" /><span>Watch</span>
                        </a>
                    </li>
                    <li className={`nav-item ${isActiveRoute("characters") ? 'active' : ''}`}>
                        <a href='/characters' className='nav-link'>
                            <i className="fas fa-lightbulb" /><span>TV</span>
                        </a>
                    </li>
                    <li className={`nav-item ${isActiveRoute("characters") ? 'active' : ''}`}>
                        <a href='/characters' className='nav-link'>
                            <i className="fas fa-lightbulb" /><span>Music</span>
                        </a>
                    </li>
                    <li className={`nav-item ${isActiveRoute("characters") ? 'active' : ''}`}>
                        <a href='/characters' className='nav-link'>
                            <i className="fas fa-lightbulb" /><span>Assistance</span>
                        </a>
                    </li>
                    </ul>
            </aside>
        </div>
    );
};

export default sideBar;