import React, {memo } from 'react';
//memo 함수 인자로 우리가 만든 컴포넌트 함수를 전달하면 PureComponent 와 같은 역할을 하게 된다.
// rci 를 사용해서 빠르게 만들 수 있다.
const AddHabit = memo((props) => {
    const inputRef = React.createRef();
    const formRef =React.createRef();
    //React는 바로 DOM 요소에 접근하지 않고
    // 필요할때는 React.createRef() 이용해서 멤버 변수를 정의한다음
    // 원하는 컴포넌트에 ref 속성으로 연결하면 된다.

    const handleSubmit = (event)=>{
        event.preventDefault();
        const habitName = inputRef.current.value;
        habitName && props.onAddHabit(habitName);
        // this.inputRef.current.value='';
        formRef.current.reset();
    };



    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit"/>
            <button className="add-button">Add</button>
        </form>
    );
});


export default AddHabit;