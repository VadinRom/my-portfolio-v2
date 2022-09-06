import React from 'react';
import { Row } from 'antd';
import './About.css';
import { useNavigate } from 'react-router-dom';
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyButton from '../components/UI/button/MyButton';
import tempimg from '../img/tempimg.jpeg'
import quizimg from '../img/quizimg.jpeg'
import calcimg from '../img/calcimg.jpeg'
import postsimg from '../img/postsimg.jpeg'
import Carousell from '../components/Carousel/Carousel';

function About() {
    const router = useNavigate()
    const wrapperRef = React.createRef();

    const handleClick = () => {
        const wrapper = wrapperRef.current;
        wrapper.classList.toggle('is-nav-open')
    }
    return (
        <div className="content">
            <div ref={wrapperRef} className="wrapper" >
                <div className="nav">
                    <Row className="nav__icon" type="menu-fold" onClick={() => handleClick()}>
                        <FontAwesomeIcon icon={faCircleLeft} />
                        <br /> Works
                    </Row>
                    <div className="nav__body">
                        <div className='rowside'>
                            <MyButton onClick={() => router('/posts')}>
                                <span>List of posts</span>
                                <img src={postsimg} alt="" />
                            </MyButton>
                        </div>
                        <div className='rowside'>
                            <MyButton onClick={() => router('/temperature')}>
                                <span>Temperature Control App</span>
                                <img src={tempimg} alt="" />
                            </MyButton>
                        </div>
                        <div className='rowside'>
                            <MyButton onClick={() => router('/quiz')}>
                                <span>Quiz</span>
                                <img src={quizimg} alt="" />
                            </MyButton>
                        </div>
                        <div className='rowside'>
                            <MyButton onClick={() => router('/calculator')}>
                                <span>Calculator</span>
                                <img src={calcimg} alt="" />
                            </MyButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center">
                <Carousell />
            </div>
        </div>
    );
}
export default About;