import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import Navlogo1 from '../../img/Logoo.png';
import Navlogo2 from '../../img/Cisco logo.png'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
    NavbarContainer,
    MobileIcon, NavMenu, NavItem,
} from './NavbarElements'
import { IconContext } from 'react-icons/lib';
import './Header.css'


export default function Header(props) {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [navbar, setNavbar] = useState(false)    
    const [openApp, setOpenApp] = useState(false);
    const handleOpenApp = () => {
     setOpenApp(true);
   };
 
   const handleCloseApp = () => {
     setOpenApp(false);
   };
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
           
        }
        else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [button])
    window.addEventListener('resize', showButton)
    const handleClick = () => setClick(!click)
 
   const changeBackground = () => {
       
       if(window.scrollY >= 80) {
           setNavbar(true)
       } else {
           setNavbar(false)
       }
   }

   window.addEventListener('scroll', changeBackground)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav expand='lg' className={navbar ? 'navbar active' : 'navbar'}>
                    <NavbarContainer>
                        <a href='https://www.abrisdc.com/' className="navlogos" target="_blank" rel="noreferrer">
                            <img src={Navlogo1} alt="logo1" className="navlogo"/>
                            <img src={Navlogo2} alt="logo2" className="navlogo"/>
                        </a>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <a href='/' className="navlink">
                                   SmartNet Total Care
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href='#serviceContact' className="navlink">
                                   Замена оборудования 
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href='#livecycleAdvantage' className="navlink" >
                                   Lifecycle Advantage
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="##презентации" className="navlink" onClick={handleOpenApp}>
                                   Презентации
                                </a>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className="classes-modal"
                                    open={openApp}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                    timeout: 500,
                                    }}
                                    >
                                    <Fade in={openApp}>
                                    <div className="forma-paper pres-box pb-4">
                                        <FaTimes onClick={handleCloseApp} className="close-button-da mb-5"/>
                                    
                                        <h4 className="app-header name-line">Презентации</h4>
                                        <a href="SmartNet Total Care_guide.pdf" className="d-block mb-3 line-ppt">SmartNet Total Care_guide </a>
                                        <a href="LCA Summary.pdf" className="d-block line-ppt mb-3">LCA Summary</a>
                                        <a href="Cisco_1_02_21_6.jpg" className="d-block line-ppt">Способ открытия сервисного запроса Cisco TAC </a>
                                        
                                    </div>
                                    </Fade>
                                </Modal>
                            </NavItem>
                            <NavItem>
                                <a href='#contactSection' className="navlink" >
                                    Контакты
                                </a>
                            </NavItem>
                            
                        </NavMenu>
                    </NavbarContainer>
                </nav>
            </IconContext.Provider>
        </>
    )
}

