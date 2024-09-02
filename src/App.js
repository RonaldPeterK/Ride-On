import { Routes, Route } from 'react-router-dom';
import Home from './Screens/homeScreen';
import AboutScreen from './Screens/aboutScreen';
import ContactScreen from './Screens/contactScreen';
import CollapsibleNav from './components/Navigation/navBar';

function App() {
  return (
    <>
      <CollapsibleNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutScreen/>} />
        <Route path="/contact" element={<ContactScreen/>} />
      </Routes>
    </>
  );
}

export default App;
