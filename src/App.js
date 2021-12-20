import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavbar from './components/SideNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<TopNavbar />} /> */}
          <Route path="/" element={<SideNavbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
