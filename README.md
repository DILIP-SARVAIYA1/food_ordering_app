// # Header
// --logo
// --nav items
// # body
// --search
// --res container
// --res card
// # footer
// --Copyright
// --link
// --Address
// --Contacts

# Components

- A component is an independent, reusable bit of code which divides the UI into smaller pieces. For example, if we were building the UI of React website using React js we can break its UI into smaller parts

# What are Functional Components?

- The first, most important and recommended component type in React is a functional component. A functional component is basically a JavaScript function that returns a React element (JSX).

# Why JSX?

- Within JSX we can add JavaScript(logic, functions, variables etc) as well by using curly braces { } inside the HTML as shown in the figure.

# Config driven UI

- Config-driven UI is a technique that allows you to create dynamic and customizable UIs without hard coding them. It uses a configuration file to define the layout and content of the UI components.

# Not using key (not acceptable) <<<<<< Using Index <<<<<<<<< Using Unique ID (Recommended)

# Optional chaining

- The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

# Props

- A Prop is a way that components communicate. React uses props to transfer data from one component to another component.
- You use props to pass data and values from one component to another to get dynamic and unique outputs.
- But remember that props only transport data in a one-way flow (only from parent to child components). It is not possible for props to pass data from a child to parent, or to components at the same level.
- Props is just JS Object.

# Export/Import

- named Export/Import
- Default Export/Import
- named export import with { }

# Hooks

    (Normal JS utility function)

- useState() - Super powerful state Variable in React. (When variable updated every time components are rendered)
- useEffect() - this will call after render components is rendered.
- Optional chaining.

# ShimmerUI

# Conditional rendering

# Reconciliation

- Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible. React uses a virtual DOM (Document Object Model) to update the UI.
