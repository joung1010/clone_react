import React, {useCallback, useEffect, useRef, useState} from 'react';

const SimpleHabit = (props) => {
    // state = {
    //     count: 0,
    // };
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(  count + 1 );
    });

    //// Similar to componentDidMount and componentDidUpdate
    // 이떄 특정인자가 변경될때만 호출하고 싶으면 뒤에 해당 인자를 전달
    // [] 빈값을 전달하면 처음에만 호출됨
    useEffect(()=>{
        console.log(`mounted & updated: ${count}`);
    },[count]);

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;

