- [ ] Why would you use class component over function components (removing hooks from the question)?

    - We would use class components over function components because with class components we can declare the state in one place and then reference that state throughout the rest of the app

- [ ] Name three lifecycle methods and their purposes.

    - **componentDidMount:**
      - Due to the fact that this method is only called once, it's a good place for API calls.
      - It mainly signals that the component and all of its sub-components have rendered properly.

    - **componentUpdate:**
      - This method will re-render the DOM elements everytime that the state changes.

    - **componentWillUnMount:**
      - This method is used to add any clean-ups before the component is destroyed.

- [ ] What is the purpose of a custom hook?

    - The primary purpose of a custome hook is to make DRY state manipulators that can be usedd through-out the app.

- [ ] Why is it important to test our apps?

    - It is important to test our apps because if the app is released without all bugs being addressed and fixed, it will cause the app to break especially when trying to update the code base. At the same time, it will make it extremly difficult to find and correct any other issues that may pop up.