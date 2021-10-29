import React from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/mail.png'
import Address from '../../img/adress.png'
import { useRef, useState, useContext } from 'react'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context'

const Contact = () => {

        const formRef = useRef()
        const [done, setDone] = useState(false)
        const theme = useContext(ThemeContext)
        const darkMode = theme.state.darkMode

        const handleSubmit = (e) => {
            e.preventDefault()
            emailjs.sendForm('service_bya4085', 'template_uds0ce7', formRef.current, 'user_6n9IcOcPiSEaPamSpeEvy')
            .then((result) => {
                console.log(result.text);
                setDone(true)
                }, (error) => {
                console.log(error.text);
                });
            
        }

    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lorem ipsum dolor sit amet.</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                             src={Phone} 
                             alt="" 
                             className="c-icon" 
                            />
                            +1 123 123 1234
                        </div>
                        <div className="c-info-item">
                            <img 
                             src={Email} 
                             alt="" 
                             className="c-icon" 
                            />
                            contact@alkida.ru
                        </div>
                        <div className="c-info-item">
                            <img 
                             src={Address} 
                             alt="" 
                             className="c-icon" 
                            />
                            Красноярск, Ленина - 1
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>У вас возникли вопросы?</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perspiciatis.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} type="text" placeholder='Имя' name='user_name' />
                        <input style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} type="text" placeholder='Тема обращения' name='user_subject' />
                        <input style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} type="text" placeholder='Электронная почта' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} rows='5' placeholder='Ваше сообщение' name='message'/>
                        <button>Отправить</button>
                        {done && 'Ваше сообщение отправлено!'}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
