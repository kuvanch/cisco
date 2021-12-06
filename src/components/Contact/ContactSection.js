import React, {useState} from 'react';
import axios from "axios";
import './ContactSection.css'


 const ContactSection = () => {

    const [state, setState] = useState({
      full_name: "", 
      email: "",
      phone_number: "",
      company_name: "",
      status: "Отправить"
    })

   const [submitted, setSubmitted]= useState(false);

   const handleSubmit = (e) => {
        e.preventDefault();  
        setSubmitted(true)
        axios.post('http://161.35.117.200:8087/api/send/application', state)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const handleChange = (e) => {
     
        setState({ ...state,
             [e.target.name]: e.target.value})
    }

    const {full_name, email, phone_number, company_name, status} = state
    return ( 
        <div className="contacts" id="contactSection">

        <div className="form-contact">
            <div className="contact-header">
              <div className="contact-header-left">
                  <p>Контакты дистрибьютера Abris Distribution</p>
                  <span className="contact-p">050059, Al-Farabi ave. 17/1,<br/> BC "Nurly-Tau",   building 5B, <br/>10th floor, 17th office<br/>
                  +7 727 355 30 36,<p>info@abrisdc.kz</p></span>
              </div>
              <div className="contact-header-right">
                  {/* <p>Контакты дистрибьютера Abris Distribution</p>
                  <p className="contact-p"><p>Abris Distribution </p></p> */}
              </div>
            </div>  
             {submitted ? <div className="successful">Заявка успешно отправлена</div> : " "}
             <h5 className="contact-label">Обратная связь</h5>
            <form onSubmit={handleSubmit} method="POST" className="forma">
               <div>
               <input
                  type="text"
                  id="full_name"
                  placeholder="Ф.И.О.*"
                  value={full_name}
                  name='full_name'
                  onChange={handleChange}
                  className="input-label"
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
                  className="input-label"
                  required
               />
               </div>
               <div>
               <input
                  type="phone_number"
                  id="number"
                  placeholder="Телефон*"
                  value={phone_number}
                  name='phone_number'
                  onChange={handleChange}
                  className="input-label"
                  required
               />
               </div>
               <div>
               <input
                  type="company_name"
                  id="company_name"
                  placeholder="Компания*"
                  value={company_name}
                  name='company_name'
                  onChange={handleChange}
                  className="input-label"
                  required
               />
               </div>
               <button type="submit" className="submit-button">{status}</button>
               <p className="footer-p">© Cisco 2021. Все права защищены</p>
            </form>   
         </div>
        <div className="contact-map">
            <iframe 
                  title="This is a unique title"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.5217264231364!2d76.96189352253484!3d43.22290000890978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f09b73b52af%3A0x9c457ef433a9e0b4!2sDostyk%20Ave%20109%D0%B1%2C%20Almaty%20050051%2C%20Kazakhstan!5e0!3m2!1sen!2s!4v1631190583557!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{border:2, width:"100%", height:"100%"}}
                  allowFullScreen=""
                  aria-hidden="false"
                  loading="lazy"
                  tabIndex="0"
                  ></iframe>
        </div>
     </div> 

     );
}
 
export default ContactSection