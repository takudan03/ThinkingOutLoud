import { Routes, Route, Link } from 'react-router-dom';
import Explore from './Explore';
import MyFeed from './MyFeed';
import Profile from './Profile';


export default function NavigationBar() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className="navbar-brand" href="#">
                    <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    Bootstrap
                </a>
                <Link to='/' className='nav-item'>My Feed</Link>
                <Link to='/explore' className='nav-item'>Explore</Link>
                <Link to='/profile' className='nav-item'>Profile</Link>
            </nav>


            <Routes>
                <Route path="/" element={<MyFeed />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
};