import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Cursor from './components/home/Cursor';
import Progress from './components/progress/Progress'

function App() {
  return (
    <div>
      <Sidebar/>
      <main className='main'>
        <Cursor/>
        <Home/>
        <About/>
        <Services/>
        <Progress />
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonials/>
        <Blog/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
