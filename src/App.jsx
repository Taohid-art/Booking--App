import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/home/Home';
import List from './Pages/list/List';
import Hotel from './Pages/hotel/Hotel';
function App() {
  return <div>
   
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotel/:id" element={<Hotel />} />
      </Routes>
  
  </div>;
}

export default App;
