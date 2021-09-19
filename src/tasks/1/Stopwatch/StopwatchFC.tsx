import React, {FC, useEffect, useState} from "react";

interface IStopwatchProps {}

const getUnits = (time: number) => {
    const seconds = time / 1000;

    const min = Math.floor(seconds / 60).toString();
    const sec = Math.floor(seconds % 60).toString();
    const msec = (seconds % 1).toFixed(3).substring(2);

    return `${min}:${sec}:${msec}`;
}

// const leftPad = (width, n) => {
//     if ((n + '').length > width) {
//         return n;
//     }
//     const padding = new Array(width).join('0');
//     return (padding + n).slice(-width);
// };

const StopwatchFC: FC<IStopwatchProps> = () => {
    const [timer, setTimer] = useState<any>();
    const [status, setStatus] = useState<boolean>(false);
    const [runningTime, setRunningTime] = useState<number>(0);

    const handleClick = () => {
        if (status) {
            clearInterval(timer);
        } else {
            const startTime = Date.now() - runningTime;
            setTimer(setInterval(() => {
                setRunningTime(Date.now() - startTime);
            }))
        }

        setStatus((prevState) => !prevState);
    };

    const handleReset = () => {
        clearInterval(timer);
        setStatus(false);
        setRunningTime(0);
    };

    const handleLap = () => {
        console.log(getUnits(runningTime));
    };

    useEffect(() => () => clearInterval(timer),[])

    return (
        <div>
            <p>{getUnits(runningTime)}</p>
            <button onClick={handleClick}>
                {status ? "Stop" : "Start"}
            </button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleLap}>Lap</button>
        </div>
    );
}

export default StopwatchFC;
