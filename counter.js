"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Importing React and Component from 'react' to create a class component in TypeScript
var react_1 = require("react");
// Step 2: Define the Counter class component, specifying types for props and state.
// We use `Component<{}, CounterState>` to indicate that:
// - There are no props (hence `{}` is used for props)
// - `CounterState` is the type of the state object
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Step 3: Define the initial state using the CounterState type
        // Here, we initialize `count` to 0 as the starting state
        _this.state = {
            count: 0
        };
        // Step 4: Define the `increment` method, with a `void` return type since it doesn't return anything.
        // This method increments the `count` value in state by 1 using `this.setState`.
        _this.increment = function () {
            // `this.setState` is used to update the state object. `count` is incremented by 1.
            _this.setState({ count: _this.state.count + 1 });
        };
        return _this;
    }
    // Step 5: Define the `render` method, which is required in class components.
    // This method returns JSX that displays the count and an increment button.
    Counter.prototype.render = function () {
        return (<div>
                {/* Display the current count value */}
                <p>Count: {this.state.count}</p>
                
                {/* Button to call the increment function when clicked */}
                <button onClick={this.increment}>Increment</button>
            </div>);
    };
    return Counter;
}(react_1.Component));
// Step 6: Export the Counter component so it can be used in other parts of the application.
exports["default"] = Counter;
