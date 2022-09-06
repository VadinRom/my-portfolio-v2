import React from 'react';
import './Card.css';
import CardItem from '../CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my works</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/postsimg.jpg'
                            text='List with posts where data is unloaded from the API'
                            label='List of posts'
                            path='/posts'
                        />
                        <CardItem
                            src='images/tempimg.jpg'
                            text='A simple counter where the color of the bar changes depending on the value'
                            label='Temperature Control App'
                            path='/temperature'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/quizimg.jpg'
                            text='Quiz with four questions'
                            label='Quiz'
                            path='/quiz'
                        />
                        <CardItem
                            src='images/calcimg.jpg'
                            text='Calculator with simple mathematical operations'
                            label='Calculator'
                            path='/calculator'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;