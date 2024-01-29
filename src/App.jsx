import React from 'react';
import { Routes, Route } from 'react-router-dom';


// ContextProvider
import ShowsContextProvider from './context/ShowsContextProvider';


// Conponents
import Landing from './components/Landing';
import Details from './components/Details';

const App = () => {

  return (
    <ShowsContextProvider>
      <Routes>
        {/* <Route path='/details' element={<Details />} />  */}
        <Route path="/details/:name" element={<Details />} />
        <Route path='*' element={<Landing />}/>
      </Routes>
    </ShowsContextProvider>
  );
};

export default App;