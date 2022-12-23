import './App.css';
// import NavigationBar from './components/NavigationBar';
import { Routes, Route, Link } from 'react-router-dom';
import Explore from './components/Explore';
import MyFeed from './components/MyFeed';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';

function App() {

  const [posts, setPosts] = useState({});

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch('/testAPI').then((response) => response.json());
      // print the data once retrieved
      // console.log(data);
      // set state with the result
      setPosts(data);
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch((err)=>{
        console.log("Error retrieving data");
        console.error;
      });
  }, [])

  return (
    <div className="App">
      <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
          Thinking Out Loud
        </a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

          <Link to='/' className='nav-link'>My Feed</Link>
          <Link to='/explore' className='nav-link'>Explore</Link>
          <Link to='/profile' className='nav-link'>Profile</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MyFeed posts={posts} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile currentUser="abc" />} />
      </Routes>
    </div>
  );
}

export default App;
