import React from 'react'
import Header from '../components/NavBar/Navbar'
import Home from "../components/home"
import ServiceContact from '../components/ServiceContact';
import Equipment from '../components/Equipment/Equipment';
import SmartNet from '../components/SmartNet/SmartNet';
import SmartElement from '../components/SmartnetElement/SmartElement';
import LivecycleAdvantage from '../components/LivecycleAdvantage/LivecycleAdvantage';
import AnswerQuestion from '../components/FAQ/AnswerQuestion';
import ContactSection from '../components/Contact/ContactSection';


const Index =()=> {
    return (
            <div className="landing-page">
                <Header/>
                <Home/>
                <ServiceContact/>
                <Equipment/>
                <SmartNet/>
                <SmartElement/>
                <LivecycleAdvantage/>
                <AnswerQuestion/>
                <ContactSection/>  
        </div>  
    )
}
export default Index;
