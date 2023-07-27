import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen'
import ShopScreen from './components/ShopScreen' 
import Errorboundary from './components/Errorboundary';
import PostList from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import DataFetcher from './components/DataFetcher';

function App() {
  return (
    <>
      <nav>
        <Link to='/'>Home </Link>
        <Link to='/profile'>Profile </Link>
        <Link to='/shop'>Shop</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Errorboundary>
          <HomeScreen />
        </Errorboundary>}/>
        <Route path='/profile' element={<Errorboundary>
          <ProfileScreen />
        </Errorboundary>}/>
        <Route path='/shop' element={<Errorboundary>
          <ShopScreen />
        </Errorboundary>}/>
      </Routes>  
     
     <PostList/>

     <Example1/>

     <Example2/>

     <Example3/>

     <DataFetcher/>
    </>
  );
}

export default App;
