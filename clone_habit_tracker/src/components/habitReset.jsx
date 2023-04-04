import React, {Component} from 'react';

class HabitReset extends Component {
    render() {
        return (
           <button className="habits-reset" onClick={this.props.onResetHabit}>Reset All</button>
        );
    }
}

export default HabitReset;