import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const App = (props) => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;