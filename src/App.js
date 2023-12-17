import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Counter from './components/Counter';
import About from './components/About';
import Story from './components/Story';
import Explore from './components/Explore';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import BookFood from './components/BookFood';
import Download from './components/Download';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      {/* Components */}
     <Header />
     <Hero />
     <Counter />
     <About />
     <Story />
     <Explore />
     <Testimonials />
     <Team />
     <BookFood />
     <Download />
     <Footer />
    </div>
  );
}

export default App;
