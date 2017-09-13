#### What are the advantages of using React?

#### How does React work?

#### What is the difference between a Presentational component and a Container component?
Presentational components are concerned with how things look. They generally receive data and callbacks exclusively via props. These components rarely have their own state, but when they do it generally concerns UI state, as opposed to data state.

Container components are more concerned with how things work. These components provide the data and behavior to presentational or other container components. They call Flux actions and provide these as callbacks to the presentational components. They are also often stateful as they serve as data sources. 

#### Where in a React component should you make an AJAX request?

#### Name the different lifecycle methods.

#### What is a higher order component?

#### What are the differences between a class component and functional component?
Class components allows you to use additional features such as local state and lifecycle hooks.

#### What advantages are there in using arrow functions?

#### What is redux?
#### How does react's connect method work?
#### How does react router work?

#### Why is it advised to pass a callback function to setState as opposed to an object?
Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

#### What is the alternative of binding this in the constructor?
You can use property initializers to correctly bind callbacks. This is enabled by default in create react app.
you can use an arrow function in the callback. The problem here is that a new callback is created each time the component renders.

#### How can you conditionally render elements with react?

#### How would you prevent a component from rendering?
Returning null from a component's rendermethod does not affect the firing of the component's lifecycle methods.

#### When rendering a list what is a key and what is its purpose?

#### What are controlled components?

#### What is the purpose of ejecting from create-react-app?

#### What is the difference between state and props?

#### What is the purpose of super(props)?

#### What is jsx?

#### What does the following compile into?
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

#### What don't you like about react?
#### What is the difference between an element and a component?
#### How does children work?
#### What is a pure function?
#### What is state in react?
State is similar to props, but it is private and fully controlled by the component. 
