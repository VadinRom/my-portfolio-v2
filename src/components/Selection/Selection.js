import React from 'react';
import '../../App.css';
import './Selection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <div className='text-container'>
                <h1>Welcome to my portfolio</h1>
                <p>I am a beginner frontend developer.</p>
                <p>This site is my personal portfolio where I post my work written in React, just like this site.</p>
                <p>You can see my work below ↓</p>
            </div>
        </div>
    );
}

export default HeroSection;