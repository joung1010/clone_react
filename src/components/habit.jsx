import React, {Component} from 'react';

class Habit extends Component {
    state = {
        count : 0,
    };

    handleIncrement = () =>{
        //state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 한다.
        // this.state.count +=1; 그냥 값을 변경하면 리엑트는 이 값이 변경되었는지 알 수 없다.
        // 그래서 state값을 변경하고 싶으면 this.setState 함수를 사용
        this.setState({count: this.state.count + 1});
    };
    handleDecrement = () =>{
        const count = this.state.count - 1
        this.setState({count: count < 0 ? 0 : count });
    };

    render() {
        // console.log(this.props.habit);
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;