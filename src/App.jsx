import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Service from './Service';
import Footer from './Footer';

function App(){
    return(
        <>  
        <BrowserRouter> 
        <NavBar/>
                <Routes>
                    <Route path="/" element=<Home/>/>
                    <Route path="/about" Component={About}/>
                    <Route path="/contact" Component={Contact}/>
                    <Route path="/service" Component={Service}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
};

export default App;