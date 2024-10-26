// Importing React, as it's necessary for JSX syntax in TypeScript
import React from 'react';

// Step 1: Define an interface for the component's props.
// This interface specifies that the Greeting component expects a 'name' prop of type string.
interface GreetingProps {
    name: string; // 'name' is a required prop and must be of type string.
}

// Step 2: Define the Greeting component as a functional component with typed props.
// The React.FC type is a shortcut that includes type-checking for props and some React-specific attributes.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    // Step 3: Return JSX, with the 'name' prop inserted within the greeting text.
    // This will render as "Hello, [name]!" where [name] is the value passed to the component.
    return <div>Hello, {name}!</div>;
};

// Step 4: Export the Greeting component so it can be imported and used in other files.
export default Greeting;
