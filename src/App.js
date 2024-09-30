import React from 'react';
import './Assets/CSS/style.css';
//import Carousels from './Common/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import TopSideNav from './Common/TopSideNav';
import HomePage from './Components/HomePage';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  let navigate = useNavigate();

  return (
    <React.Fragment>

      <div className="App m-0 p-0">
        <Routes>

          <Route path={`/`} element={<HomePage navigate={navigate} />} />

        </Routes>
      </div>
      
    </React.Fragment>
  );
}

export default App;