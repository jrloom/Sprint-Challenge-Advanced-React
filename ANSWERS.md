- [ ] Why would you use class component over function components (removing hooks from the question)?

- If you need to use something that comes from React.Component (lifecycle methods)
- If the component needs its own state
- Hooks are a new feature of React, so older code bases will probably utilize classes

- [ ] Name three lifecycle methods and their purposes.

- `componentDidMount()`, in the mounting phase, called with `render()`, used for fetching data via HTTP
- `useState()` is called when state is updated, forces a re-render of the UI with the updated state
- `render()` tells React to return some piece of the DOM - a class component will not work without this method

- [ ] What is the purpose of a custom hook?

A custom hook allows us to apply non-visual behavior and stateful logic throughout our components by reusing the same hook over and over again. Instead rewriting the same bit of code over and over again in multiple components, we can write a custom hook once and import it into whatever component we need it in.

- [ ] Why is it important to test our apps?

- Surfaces bugs faster
- Reduces risk of regressions
- Allows us to trust our code
- Makes us think about edge cases
- Acts as a safety net when making changes or refactoring
- Acts as documentation
- Encourages more testable code to be written
