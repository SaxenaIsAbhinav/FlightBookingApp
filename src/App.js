import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProfilePage from './components/profile/ProfilePage';
import ContactForm from './components/profile/UserForm';
import background from './assets/image.png'; 
import Ticket from './components/profile/Ticket';
import PnrInputPage from './components/profile/PnrInputPage';


function App() {

  return (
    <div className="App" style={{background: "#E6E6FA" }}>


      <header className="App-header">
    
      
      <Router>
      <Routes>
      <Route path="/createProfile" element={<ContactForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ticket/pnr" element={<Ticket />} />
        <Route path="/pnr" element={<PnrInputPage />} />
      </Routes>
    </Router>
      
      </header>
      
    </div>
    
  );
}

export default App;
