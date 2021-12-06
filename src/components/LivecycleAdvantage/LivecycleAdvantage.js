import React from 'react';
import LifecycleImage from "../../img/Illustration 03.png";
import "./LivecycleAdvantage.css";
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import {FaTimes} from "react-icons/fa";
// import axios from "axios";

const LivecycleAdvantage = () => {
    // const [open, setOpen] = useState(false);
    // const [openApp, setOpenApp] = useState(false);
  
    // const handleOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
    // const handleOpenApp = () => {
    //     setOpenApp(true);
    //   };
    
    //   const handleCloseApp = () => {
    //     setOpenApp(false);
    //   };
    //   const [state, setState] = useState({
    //      full_name: "", 
    //      email: "",
    //      number: "",
    //      company_name:"",
    //      status: "Отправить"
    //    })
    //   const handleSubmit = (e) => {
    //        e.preventDefault();  
    //        alert("Заявка была успешно отправлена:")
    //       console.log(state)
    //        axios.post('http://161.35.117.200:8087/api/send/application', state)
    //        .then((res) => {
    //            console.log(res)
    //        })
    //        .catch((err) => {
    //            console.log(err)
    //        })
    //    }
    //    const handleChange = (e) => {
        
    //        setState({ ...state,
    //             [e.target.name]: e.target.value})
    //    }
   
    //    const {full_name, email, number, company_name, status} = state
      
    return (  
        <>
        <div className="lifecycle" id="livecycleAdvantage">
            <div className="lifecycle-img">
               <img src={LifecycleImage} alt="lifecycle advantage" data-aos="fade-right" data-aos-duration="1000" className="imageL"/>
            </div>
            <div className="lifecycle-information">
                <h2 className="lifecycle-header">Lifecycle Advantage – цифровой маркетинг и аналитика бесплатно</h2>
                <p>Cisco Lifestyle Advantage – это управляемая программа, которая помогает развивать отношения с заказчиками и увеличивать объем продаж с помощью серии автоматизированных электронных писем.</p>
                <div className="video-modal-box">
                    <a href="https://ciscob2b215968.invisionapp.com/console/share/D61QEOE4JW/496274975" className="btn lifecycle-button"  >Презентация платформы LCA</a>
                </div>   
                <h4>Преимущества данной программы</h4>
                  <div className="heigth-line-box">
                    <div className="heigth-line5"></div>
                        <p>Возможность настроить автоматизированную рассылку электронных писем своим заказчикам.</p>
                  </div>
                    <div className="heigth-line-box">
                        <div className="heigth-line6"></div>
                        <p>Cisco предоставляет онлайн-платформу, в которую каждый месяц подгружаются данные о потенциальных сделках
                        с Вашими клиентами.
                        </p>
                  </div>
                    <div className="heigth-line-box">
                        <div className="heigth-line1"></div>
                        <p>Вы получаете своевременные данные об окончании сервисных контрактов, подписок, лицензий.</p>
                  </div>
                    <div className="heigth-line-box">
                      <div className="heigth-line2"></div>
                      <p>Вы получаете информацию о наступлении LDoS на ваше оборудование и можете предложить заказчику новое решение.</p>
                  </div>
                    <div className="heigth-line-box">
                        <div className="heigth-line3"></div>
                        <p>Настроив уведомление типа 2nd Chance Attach вы информируете
                            заказчиков о том, что они могут покрыть ранее купленное без
                            сервисного контракта оборудование.
                        </p>
                  </div>
                    <div className="heigth-line-box">
                    <span className="heigth-line4"></span>
                    <p>Контроль отправки уведомлений заказчикам: возможность выбора кому отправлять и кого исключать из рассылки.</p>
                  </div>   
                <div>
                     <a href="https://lca-signup.services-exchange.com/signup#" className="btn application-button my-3">Регистрация для участия в программе</a>
                        {/* <Modal
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
                                <form onSubmit={handleSubmit} method="POST" className="application-forma">
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
                                    <button type="submit" className="app-button">{status}</button>
                                </form> 
                            </div>
                            </Fade>
                        </Modal> */}
                    </div>
            </div> 
        </div>
        
        <div className="advantage-help-box">
            <div className="advantage-header">
               <h2 className="def">Программа Lifecycle Advantage поможет вам:  </h2>
            </div>
           
            <div className="advantage-help">
            <div className="groups" data-aos="fade-right" data-aos-duration="2000">
                    <div className="l37">
                        <div className="group37">
                            <p className="group37-p">Увеличить AR и RR по сервисам и доход от продаж сервисов</p>
                        </div>
                    </div>
               </div>
               <div className="groups" data-aos="zoom-in" data-aos-duration="2000">
                    <div className="l36">
                        <div className="group36">
                            <p className="group36-p">Увеличить регулярный доход и долю продленных договоров</p>
                        </div>
                    </div>
               </div>
               <div className="groups" data-aos="fade-left" data-aos-duration="2000">
                    <div className="l38">
                        <div className="group38">
                            <p className="group38-p">Автоматизировать коммуникацию с заказчиком и сократить время, используемое на маркетинговые активности</p>
                        </div>
                    </div>
               </div>
            </div>
               
        </div>  
       </>
    );
}
 
export default LivecycleAdvantage;
