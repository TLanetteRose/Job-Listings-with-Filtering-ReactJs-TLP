import React from 'react';
import './App.scss';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { JobsList } from './components/JobsList';


function App() {

    return (
        <React.Fragment>
            <Header />
            <JobsList />
            <Footer />
        </React.Fragment>
    )
}


export default App;







