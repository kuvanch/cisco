import React from 'react';
import imgArm from "../../img/product 1.png";
import imgApple from "../../img/apple 1.png";
import imgTool from "../../img/tool 1.png";
import imgGroup from "../../img/Group.png";
import imgApps from "../../img/apps 1.png";
import imgSupport from "../../img/online-support 1.png";
import "aos/dist/aos.css";
import "./SmartElement.css";

const  SmartElement = () => {
    return (
        <div className="smartelement" id="smartelement">
            <div className="element1 element">
                <div className="product product-arm blue-color" data-aos="fade-up-right" data-aos-duration="1000" >
                    <div className="element-card">
                        <img src={imgArm} alt="img of arm" className="tool-icon"/>
                        <h2>Доступность</h2>
                    </div>                   
                    <h4>Сервисный контракт</h4>
                    <p>1год (365 дней) или более. Поддержка всех технологий Cisco</p>
                    <hr/>
                    <h4>Гарантия</h4>
                    <p>90 дней или более</p> 
                </div>
                <div className="product product-apple white-color" data-aos="fade-up-left" data-aos-duration="1000">
                    <div className="element-card">
                        <img src={imgApple} alt="img of Apple" className="tool-icon"/>
                        <h2>IOS</h2>
                    </div>                 
                    <h4>Сервисный контракт</h4>
                    <p>IOS Updates, Bugfixes, круглосуточный доступ к центру ПО</p>
                    <hr/>
                    <h4>Гарантия</h4>
                    <p>Только Bugfixes</p> 
                </div>
            </div>
            <div className="element2 element">
                <div className="product product-tool white-color" data-aos="fade-up-right" data-aos-duration="1000">
                    <div className="element-card-da">
                        <img src={imgTool} alt="img of Tool"  className="tool-icon-da"/>
                        <h2 className="tool-header mb-5">Замена оборудования<br/>Авансовая замена</h2>
                    </div>
                    <h4>Сервисный контракт</h4>
                    <p>Авансовая замена NBD</p>
                    <hr/>
                    <h4>Гарантия</h4>
                    <p>От 10 дней, отгрузка из Амстердама</p> 
                </div>
                <div className="product product-group blue-color dala" data-aos="fade-up-left" data-aos-duration="1000" >
                    <div className="element-card mb-4">
                        <img src={imgGroup} alt="img of Group" className="tool-icon"/>
                        <h2>TAC</h2>
                    </div>            
                    <h4>Сервисный контракт</h4>
                    <p>Заявки принимаются по e-mail и телефону в любое время.Немедленная поддержка от инженеров TAC.</p>
                    <hr/>
                    <h4>Гарантия</h4>
                    <p>Нет</p> 
                </div>
            </div>
            <div className="elemennt3 element">
                <div className="product product-apps blue-color dals" data-aos="fade-up-right" data-aos-duration="1000">
                    <div className="element-card mb-3">
                        <img src={imgApps} alt="img of Apps" className="tool-icon"/>
                        <h2>Cisco.com</h2>
                    </div>           
                    <h3>Сервисный контракт</h3>
                    <p>Web-инструменты, технические билиотеки, центр ПО, форумы</p>
                    <hr/>
                    <h3>Гарантия</h3>
                    <p>Нет</p> 
                </div>
                <div className="product product-support white-color"  data-aos="fade-up-left" data-aos-duration="1000">
                    <div className="element-card">
                        <img src={imgSupport} alt="img of Support" className="tool-icon"/>
                        <h2>Поддержка Online</h2>
                    </div>
                    <h3>Сервисный контракт</h3>
                    <p>Полный доступ</p>
                    <hr/>
                    <h3>Гарантия</h3>
                    <p>Нет</p>
                </div>
            </div>
        </div>
      );
}
 
export default  SmartElement;