import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Component/Navbar/NavbarComp';
import Footer from './Component/footer/footer';
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Footer/>
    </div>
  );
}

export default App;
