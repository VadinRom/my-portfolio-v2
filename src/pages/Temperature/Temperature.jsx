import React, { useState } from "react";
import './Temperature.css'

const Temperature = () => {
    let newTemperature = 0
    const [temperatureValue, setTemperatureValue] = useState(0);
    const [temperatureColor, setTemperatureColor] = useState("cold");

    const makeTemperatureZero = () => {
        newTemperature = 0
        setTemperatureValue(newTemperature);
        setTemperatureColor("cold")
    }

    const increaseTemperature = () => {
        if (temperatureValue === 40) return;
        newTemperature = temperatureValue + 1;
        setTemperatureValue(newTemperature);
        setTemperatureColor(z)
    };

    const increaseTemperatureFive = () => {
        if (temperatureValue === 40) {
            return
        } else if (temperatureValue >= 35 && temperatureValue < 40) {
            newTemperature = 40;
            setTemperatureValue(newTemperature)
        } else {
            newTemperature = temperatureValue + 5;
            setTemperatureValue(newTemperature);
        }
        setTemperatureColor(z)
    };

    const decreaseTemperature = () => {
        if (temperatureValue === -20) return;
        newTemperature = temperatureValue - 1;
        setTemperatureValue(newTemperature);
        setTemperatureColor(z)
    };

    const decreaseTemperatureFive = () => {
        if (temperatureValue === -20) {
            return
        } else if (temperatureValue <= -15 && temperatureValue > -20) {
            newTemperature = -20;
            setTemperatureValue(newTemperature)
        } else {
            newTemperature = temperatureValue - 5;
            setTemperatureValue(newTemperature);
        }
        setTemperatureColor(z)
    };

    function z() {
        if (newTemperature <= 40 && newTemperature >= 30) {
            return "veryhot"
        } else if (newTemperature <= 29 && newTemperature >= 15) {
            return "hot"
        } else if (newTemperature <= 14 && newTemperature >= -5) {
            return "cold"
        } else {
            return "verycold"
        }
    }
    return (
        <div className="appContainer">
            <div className="temperatureDisplayContainer">
                <div className={`temperatureDisplay ${temperatureColor}`}>
                    {temperatureValue}°C
                </div>
            </div>
            <div className="buttonContainer">
                <button onClick={increaseTemperatureFive}>+5</button>
                <button onClick={increaseTemperature}>+</button>
                <button onClick={makeTemperatureZero}>0°C</button>
                <button onClick={decreaseTemperature}>-</button>
                <button onClick={decreaseTemperatureFive}>-5</button>
            </div>
        </div >
    );
}

export default Temperature;