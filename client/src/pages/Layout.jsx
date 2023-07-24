import { Outlet, Link } from 'react-router-dom';

function Layout() {

    return(
        <div>
            <div className="container-fluid">
                <div className="navbar">
                        <div className="nav-logo col-2">
                            <Link to="/" className='nav-link'>Home Logo</Link>
                        </div>
                        <div>
                            <ul className="nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        BULLETINS
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Articles</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Resources</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        MINISTRY
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">WAN</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">SOS</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Lifegroup</a></li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="/ministry" className='nav-link'>MINISTRY</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link to="/outreach" className='nav-link'>OUTREACH</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/network" className='nav-link'>NETWORK</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/church" className='nav-link'>CHURCH</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className='nav-link'>CONTACT US</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='co-2'>
                            <a href="" className="social-link">Facebook</a>
                            <a href="" className="social-link mx-3">Instagram</a>
                            <a href="" className="social-link">Tweeter</a>
                        </div>
                </div>

                < Outlet />
            </div>
        </div>
    )
}

export default Layout;