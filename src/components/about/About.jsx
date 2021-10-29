import React from 'react'
import './about.css'
import chimi from '../../img/chimi.jpg'
import award from '../../img/award.jpg'


const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={chimi} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">О нас</h1>
                <p className="a-sub">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo unde sint sed temporibus doloremque voluptatum.
                </p>
                <p className="a-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam laborum voluptatum tenetur consequuntur velit nesciunt suscipit, error doloremque aliquam ipsum repellat optio eveniet cum dolor perspiciatis ullam possimus fugiat dolore quasi.
                </p>
                <div className="a-award">
                    <img className="a-award-img" src={award} alt="" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Конкурс пива и рыбы</h4>
                        <p className="a-award-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, doloremque!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
