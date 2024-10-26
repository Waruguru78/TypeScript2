// Importing React and Component from 'react' to create a class component in TypeScript
import React, { Component } from 'react';

// Step 1: Define an interface for the component's state.
// This interface defines the shape of the state object, specifically that `count` is a number.
interface CounterState {
    count: number; // The `count` property in state is required and must be a number.
}

// Step 2: Define the Counter class component, specifying types for props and state.
// We use `Component<{}, CounterState>` to indicate that:
// - There are no props (hence `{}` is used for props)
// - `CounterState` is the type of the state object
class Counter extends Component<{}, CounterState> {
    // Step 3: Define the initial state using the CounterState type
    // Here, we initialize `count` to 0 as the starting state
    state: CounterState = {
        count: 0,
    };

    // Step 4: Define the `increment` method, with a `void` return type since it doesn't return anything.
    // This method increments the `count` value in state by 1 using `this.setState`.
    increment = (): void => {
        // `this.setState` is used to update the state object. `count` is incremented by 1.
        this.setState({ count: this.state.count + 1 });
    };

    // Step 5: Define the `render` method, which is required in class components.
    // This method returns JSX that displays the count and an increment button.
    render() {
        return (
            <div>
                {/* Display the current count value */}
                <p>Count: {this.state.count}</p>
                
                {/* Button to call the increment function when clicked */}
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

// Step 6: Export the Counter component so it can be used in other parts of the application.
export default Counter;
