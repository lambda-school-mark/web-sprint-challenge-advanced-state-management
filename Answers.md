1. What problem does the context API help solve?
   it simplifies state management keeping it clean as you develop your app
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Action: action packets with object data for the reducer to update store
   Reducers: handle the action packet and update store
   Store: is what actually updates state
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is global and component state is local. You can still pass component state around but application state is easier to access. However, not every component state is used everywhere, therefore would be a waste to use as application state. It depends.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux thunk is middle ware allowing one to pass functions instead of object data. It allows action creators to execute asynchronous calls.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   Perhaps context? It seems much cleaner which I like but its all a blur, I am still getting a grasp of things.
