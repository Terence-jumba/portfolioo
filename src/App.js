import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Mission from './Mission';
import Services from './Services';
import Experience from './Experience';
import ContactForm from './ContactForm';
import Socials from './Socials';
import SelectedWork from './SelectedWork';

//hosted the website on netlify and the link is https://terencequinton.netlify.app/

function App() {
  return (
    <div className="App">
     <Home />
     <Mission />
     <Services />
     <SelectedWork />
     <Experience />
     <ContactForm />
     <Socials />
    </div>
  );
}

export default App;
