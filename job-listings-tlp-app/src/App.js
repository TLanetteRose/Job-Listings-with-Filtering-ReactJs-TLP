import React from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import data from '../src/data.json';
import './App.scss';


function App() {
  

    return (
        <React.Fragment>
            <Header></Header>
            <div className="container">

            </div>
            <Footer></Footer>
        </React.Fragment>    
    );
}

export default App;
