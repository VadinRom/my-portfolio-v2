import "./Quiz.css"
import React, { useState } from 'react';
import MyButton from "../../components/UI/button/MyButton";

export default function App() {
    const questions = [
        {
            question: 'The Day of the Programmer is an international professional day that is celebrated on the ...',
            answerOptions: [
                { answer: '128th day', isCorrect: false },
                { answer: '8th day', isCorrect: false },
                { answer: '256th day', isCorrect: true },
                { answer: '64th day', isCorrect: false },
            ],
        },
        {
            question: 'In what year did the JavaScript programming language appear?',
            answerOptions: [
                { answer: '1998', isCorrect: false },
                { answer: '1995', isCorrect: true },
                { answer: '2001', isCorrect: false },
                { answer: '1992', isCorrect: false },
            ],
        },
        {
            question: 'What programming language has not yet received a Turing Award?',
            answerOptions: [
                { answer: 'C', isCorrect: true },
                { answer: 'Modula', isCorrect: false },
                { answer: 'Algol', isCorrect: false },
                { answer: 'Fortran', isCorrect: false },
            ],
        },
        {
            question: 'The ideas of binary coding were laid by:',
            answerOptions: [
                { answer: 'John von Neumann', isCorrect: false },
                { answer: 'Charles Babbage', isCorrect: false },
                { answer: 'Ada Lovelace', isCorrect: false },
                { answer: 'Gottfried Wilhelm Leibniz', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-display'>
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                    <MyButton
                        style={{
                            marginTop: 20,
                            color: 'white',
                            borderColor: 'white'
                        }}
                        onClick={() => { setShowScore(false); setCurrentQuestion(0); setScore(0) }}>
                        Try again?
                    </MyButton>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].question}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answer}</button>
                        ))}
                    </div>
                </>
            )
            }
        </div >
    );
}