#### What are the advantages of using React?
- It is easy to know how a component is rendered, you just need to look at the render function.
- JSX makes it easy to read the code of your components. It is also really easy to see the layout, or how components are plugged/combined with each other.
- You can render React on the server-side. This enables improves SEO and performance.
- It is easy to test.
- You can use React with any framework (Backbone.js, Angular.js) as it is only a view layer.

#### How does React work?
React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the DOM. The second step is reconciliation, where it updates the DOM with the results of diff.

#### What is the difference between a Presentational component and a Container component?
Presentational components are concerned with how things look. They generally receive data and callbacks exclusively via props. These components rarely have their own state, but when they do it generally concerns UI state, as opposed to data state.

Container components are more concerned with how things work. These components provide the data and behavior to presentational or other container components. They call Flux actions and provide these as callbacks to the presentational components. They are also often stateful as they serve as data sources. 

#### Where in a React component should you make an AJAX request?
`componentDidMount` is where an AJAX request should be made in a React component. This method will be executed when the component “mounts” (is added to the DOM) for the first time. This method is only executed once during the component’s life. Importantly, you can’t guarantee the AJAX request will have resolved before the component mounts. If it doesn't, that would mean that you’d be trying to setState on an unmounted component, which not work. Making your AJAX request in `componentDidMount` will guarantee that there’s a component to update.

#### Name the different lifecycle methods.
- `componentWillMount`- this is most commonly used for App configuration in your root component. 
- `componentDidMount` - here you want to do all the setup you couldn’t do without a DOM, and start getting all the data you need. Also if you want to set up eventListeners etc. this lifecycle hook is a good place to do that.
- `componentWillReceiveProps` - this lifecyclye acts on particular prop changes to trigger state transitions.
- `shouldComponentUpdate` - if you’re worried about wasted renders `shouldComponentUpdate` is a great place to improve performance as it allows you to prevent a rerender if component receives new `prop`. shouldComponentUpdate should always return a boolean and based on what this is will determine if the component is rerendered or not.
- `componentWillUpdate` - rarely used. It can be used instead of `componentWillReceiveProps` on a component that also has `shouldComponentUpdate` (but no access to previous props).
- `componentDidUpdate` - also commonly used to update the DOM in response to prop or state changes.
- `componentWillUnmount` - here you can cancel any outgoing network requests, or remove all event listeners associated with the component.

#### What is a higher order component?
A higher-order component is a function that takes a component and returns a new component

#### What are the differences between a class component and functional component?
Class components allows you to use additional features such as local state and lifecycle hooks. Also, to enable your component to have direct access to your store and thus holds state.

When your component just receives props and renders them to the page, this is a 'stateless component', for which a pure function can be used. These are also called dumb components or presentational components.

#### What advantages are there in using arrow functions?

#### What is redux?
The basic idea of redux is that the entire application state is kept in a single store. The store is simply a javascript object. The only way to change the state is by firing actions from your application and then writing reducers for these actions that modify the state. The entire state transition is kept inside reducers and should not have any side-effects.

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
