import React from 'react';
import './App.scss';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
    return (
        <React.Fragment>
            <Header />
            <div className='container'>
            </div>
            <Footer />
        </React.Fragment>

    );

}

export default App;