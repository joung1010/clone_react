import React from 'react';
import Habit from "./habit";
import AddHabit from "./addHabit";

const Habits = ({
                    habits,
                    onIncrement,
                    onDecrement,
                    onDelete,
                    onAddHabit,
                    onReset
                }) => (
    <section className="habits">
        <AddHabit
            onAddHabit={onAddHabit}
        />
        <ul>
            {habits.map(habit =>
                (<Habit key={habit.id}
                        habit={habit}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                />)
            )}
        </ul>
        <button className="habits-reset" onClick={onReset}>Reset All</button>
    </section>
);

export default Habits;

