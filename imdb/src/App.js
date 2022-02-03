import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies'

function App() {
  return (
    <>
    {/* <h1>Hello Akash!</h1> */}
    {/* <h2>Navbar</h2> */}
    <NavBar></NavBar>

    {/* <h2>Banner</h2> */}
    <Banner></Banner>

    {/* <h2>Trending</h2> */}
    <Movies></Movies>

    {/* <h2>Pagination</h2>  */}
    </>
  );
}

export default App;
