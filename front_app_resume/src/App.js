
import './App.scss';
import { About, Testimonial, Work,Skills,Header,Footer } from './container';
import { NavBar } from './components';


function App() {
  return (
    <div className="app">
      <NavBar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonial/>
    <Footer/>
    
    </div>
  );
}

export default App;
