import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Company from './component/company';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio';
import Sider from './component/Sider';
import Pricing from './component/Pricing';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Company/>
    <About/>
    <Service/>
    <Portfolio/>
    <Sider/>
    <Pricing/>
    <Contact/>
    </div>
  );
}

export default App;
