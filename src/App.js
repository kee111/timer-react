import React, { useState, useEffect } from "react";
import Demo from "./components/demo";
const date = new Date();

function App() {
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    });
    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="container">
                <div>
                    <Demo />
                </div>
                <div>
                    {" "}
                    {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
                </div>
            </div>
        </>
    );
}

export default App;
