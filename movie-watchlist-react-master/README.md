#redux toolkit
-install @reduxjs/toolkit and react-redux
-build our store
-connect our store to our app
-slice (cartslice)
-dispatch(action)
-Selector


#addmovies

handleFavourite dispatch an action with payload create an action with objects
{

}

In JavaScript and React, all three of the `onClick` examples you provided have different behaviors due to the way they handle function execution and parameter passing. Let's break down each one:

1. `onClick={handleAdd(item)}`
   This code will not work as intended. It immediately invokes the `handleAdd(item)` function when the component renders, rather than waiting for the click event. This is because you are invoking the function and assigning its return value to `onClick`. It's essentially the same as calling `handleAdd(item)` outside the event handler.

2. `onClick={() => handleAdd(item)}`
   This code creates an arrow function that wraps the `handleAdd(item)` function. It works correctly and will call `handleAdd(item)` when the onClick event is triggered. This approach is useful when you need to pass arguments to the event handler, as it captures the value of `item` at the time the arrow function is created. However, keep in mind that this approach creates a new function instance every time the component renders, which could lead to performance issues if used excessively in a large-scale application.

3. `onClick={handleAdd}`
   This code assigns the `handleAdd` function directly to the `onClick` event without any additional parameters. It's suitable when you don't need to pass any arguments to the event handler. When the onClick event is triggered, it will call the `handleAdd` function without any arguments. If you need access to the `item` within the `handleAdd` function, you would typically use this approach in conjunction with other techniques like closures or component state.

In summary, which approach to use depends on your specific requirements:

- Use `onClick={handleAdd}` when you don't need to pass any additional data to the event handler.
- Use `onClick={() => handleAdd(item)}` when you need to pass data to the event handler and want to capture the value of the data at the time the component renders.
- Avoid `onClick={handleAdd(item)}` as it immediately invokes the function and doesn't work as intended for handling click events.
