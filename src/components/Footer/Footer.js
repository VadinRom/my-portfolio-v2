import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Just a footer
                </p>
                <p className='footer-subscription-text'>
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Link 1</Link>
                        <Link to='/'>Link 2</Link>
                        <Link to='/'>Link 3</Link>
                        <Link to='/'>Link 4</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Link 1</Link>
                        <Link to='/'>Link 2</Link>
                        <Link to='/'>Link 3</Link>
                        <Link to='/'>Link 4</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Codes</h2>
                        <Link to='/'>Link 1</Link>
                        <Link to='/'>Link 2</Link>
                        <Link to='/'>Link 3</Link>
                        <Link to='/'>Link 4</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Portfolio
                            <i class='fas fa-laptop-code' />
                        </Link>
                    </div>
                    <small class='website-rights'>Vadim Romanenko © 2022</small>
                    <div class='social-icons'>
                        <a href="https://github.com/VadinRom?tab=repositories" style={{ fontSize: 20, color: 'white', textDecoration: 'none' }}>
                            <i class='fab fa-github' />
                            GitHub code repository
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;