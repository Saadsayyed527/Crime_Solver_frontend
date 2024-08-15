import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LostFound from './components/LostFound';
import ReportCrime from './components/ReportCrime';
import ViewLostFound from './components/ViewLostFound'; // Create this component
import ViewCrimes from './components/ViewCrimes'; // Create this component

function App() {
    return (
      
        <div>
          
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lost-found" element={<LostFound />} />
                {/* <Route path="/report-crime" element={<ReportCrime />} /> */}
                <Route path="/view-lost-found" element={<ViewLostFound />} />
                <Route path="/view-crimes" element={<ViewCrimes />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;
