import React,{useState} from 'react';
import Imagesecond from "../img/Layer 2.png";
import AOS from 'aos';
import "aos/dist/aos.css";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {FaTimes} from "react-icons/fa";
import axios from "axios";

const ServiceContact =()=> {
   AOS.init()
   const [openApp, setOpenApp] = useState(false);
   const handleOpenApp = () => {
    setOpenApp(true);
  };

  const handleCloseApp = () => {
    setOpenApp(false);
  };

   const [state, setState] = useState({
     full_name: "", 
     email: "",
     number: "",
     company_name:"",
     status: "Отправить"
   })
        const handleSubmit = (e) => {
            e.preventDefault();  
            <div className="alert-success">{alert("Заявка была успешно отправлена")}</div>
            axios.post('http://161.35.117.200:8087/api/send/application', state)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
        }
        const handleChange = (e) => {
        
            setState({ ...state,
                [e.target.name]: e.target.value})
        }

        const {full_name, email, number, company_name, status} = state

        return (

            <div className="second">
                <div className="service-left" data-aos="fade-right"  data-aos-duration="600">
                    <div className="second-text">Сервисные контракты SmartNet Total Care</div>
                    <a href="#service" className="btn second-button app-button " onClick={handleOpenApp} >Получить консультацию</a>
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
                            <div className="forma-paper">
                                <FaTimes onClick={handleCloseApp} className="close-button"/>
                                <h4 className="app-header">Оставьте заявку</h4>
                                <form onSubmit={handleSubmit} method="POST"      className="application-forma">
                                    <div>
                                    <input
                                        type="text"
                                        id="full_name"
                                        placeholder="Ф.И.О.*"
                                        value={full_name}
                                        name='full_name'
                                        onChange={handleChange}
                                        className="input-placeholder"
                                        required
                                    />
                                    </div>
                                    <div>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email*"
                                        value={email}
                                        name='email'
                                        onChange={handleChange}
                                        className="input-placeholder"
                                        required
                                    />
                                    </div>
                                    <div>
                                    <input
                                        type="text"
                                        id="number"
                                        placeholder="Телефон*"
                                        value={number}
                                        name='number'
                                        onChange={handleChange}
                                        className="input-placeholder"
                                        required
                                    />
                                    </div>
                                    <div>
                                    <input
                                        type="text"
                                        id="company_name"
                                        placeholder="Компания*"
                                        value={company_name}
                                        name='company_name'
                                        onChange={handleChange}
                                        className="input-placeholder"
                                        required
                                    />
                                    </div>
                                    <div className="description-box">
                                        <p className="description">Все поля помеченные * обязательны для заполнения. Нажимая кнопку     “Отправить” Вы даете согласие на обработку персональных данных </p>
                                    </div>
                                    <button type="submit" className="app-button" >{status}</button>
                                </form> 
                            </div>
                            </Fade>
                        </Modal>

                </div>
                <div className="service-img" data-aos="fade-left"  data-aos-duration="600">
                    <img src={Imagesecond} alt="#second" className="layer-2"/>
                </div>
           </div>
          );
    
}
 
export default ServiceContact;