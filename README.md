# learn-react-2021
# learn-react

### React Community
* Reactiflux - [reactiflux](https://www.reactiflux.com), [github](https://github.com/reactiflux/reactiflux.com)
* Microsoft React Libraries - [github](https://github.com/microsoft/fluentui/wiki/Getting-Started-with-UI-Fabric)
* Material-ui [material-ui](https://material-ui.com)
* React Bootstrap [github](https://react-bootstrap.github.io)
* Awesome react repo on [github](https://github.com/enaqx/awesome-react)

### Ecosystem
* Router - React Router
* Complex Dataflow - Redux, Mobx
* Automated Testing - Jest, Mocha
* Restful API - GraphQL
* Serverside using Node - Next.js
* Http - Fetch, Axios
* I18n - react-intl
* form validation - react-forms
* CLI - create-react-app



### Resources:
[Chapter wise Experiments from Pluralsight](jscomplete.com/playground/rgs1.1) 


### Why React
* React is better because it uses virtual DOM, instead of letting the html structure being pushed out from server, it is dynamically generated from the JS on the page
> Updating DOM is hard, and DOM is the one that makes the html render slow even though js was fast
> Virtual DOM allows to compare for only change and render
> The whole of react library to packaged only takes about 35KB space in the codebase 

  
  
### Tradeoffs (Important for Decision making)

| Others | React |
|--------|-------|
| Framework | Library | 
| Concise | Explicit | 
| Template centric | JS centric |
| Separate Templates | Single File |
| Standard web components | Non-standard | 

  * React is a library not framework, unlike Angular. Framework helps with easy setup, but library has advantage in being smaller size. Being small, it can be changed small component in any existing non-react pages
  * React requires explicit association instead of concise or implicit association as done in angular. Angular code becomes smaller, but React allows more control
  * React is javascript focused compared to that of template centric. Angular has template to enhance the html for dynamism. But React uses power of JS to make html work
  
  Example of IF block (Angular uses template defined for angular where as React uses regular JS)
  > angular
  ```ts
  <h1 *ngIf="isAdmin"> Hi Admin </h1>
  ```
  > react: text within h1 will show only when isAdmin is True
  
  ```JSX
  {isAdmin && <h1>Hi Admin</h1>
  ```
  
 Example of For loop (Angular uses its for loop template, React uses javascript map function and arrow function)
 > angular
 ```ts
  <div *ngFor = "let user of users">{{user.name}}</div>
  ```
  > react
  ```JSX
  users.map(user => <div>{user.name}</div>)
  ```
  *   React uses single file for Model, View and Controller (JS and JSX) in contrast with others. It manages cocerns of separations are taken care by html components such as button, datepicker, accordion and text box etc.

* React is non-standard library as compared to web component standards. the standards comprise of templates, custom elements, shadow DOM for styles, imports. 

### Limitations
* JSX differs from HTML somewhat
* Build step
* Version conflict compared to different versions being compatible with standard web components
* Online content has outdated contents too, so older syntaxes are found often
* Lack of template and with lot of decisions to make with libraries can be exhausting. This can be dealt with following
  * boilerplate projects are available such as <strong> create-react-app, next.js </strong>
* Decision to declar as Class or Function - Function better as syntax is more concise
* Types: prop types, type script, flow
  * prop types - checks types at runtime, more js like syntax (preferred)
  * type script - checks at compile time, more java like syntax (second preferred)
  * flow - type safety via java annotations
* State Management: app's data
  * Plain React: components handle state by themselves, hence most others are options
  * Flux: centralizes state
  * Redux: centralized, and immutable data store
  * Mob X: lightweight, observable state (less code)
* Styling: off the shelf is good enough


### Components
Fundamental units of react. Each component is responsible for an element in DOM.

#### Component | Props | State | Render | Virtual DOM


### Starter Elements
index.js starts looking for the following line to start rendering the DOM. All code should go to a class or function (preferred)
```JSX
ReactDOM.render(<Hello/>, document.getElementById("root"));

```

A starter function description. props is the property through which parameters can be sent encapsulated in an object
```JSX
function Hello(props){
  return <h1> Hello World </h1>;
}

```
#### Example with usage of class element

> Define a new Class, example ExampleClass
```JSX
import { Component } from "react";
class ExampleClass extends Component {
  render() {
    return <div>This is an Example Class !</div>;
  }
}

export default ExampleClass;
```

> Invoke the class, it would automatically look for the render method

```JSX
ReactDOM.render(<ExampleClass />, document.getElementById("root"));
```


### Useful Tips:

* React uses JSX extension and not HTML. Babel is used to convert JSX to JS on the browser
* TypeScript is another language that can 
* Component names must start with Upper case
* Prefer function over class
* Prefer props over state
* Use parent function to show multiple components at one display, use <div> tag or <> to create hierarchy  
* Props is a parameter that is passed from parent to child component, particularly to send state objects
* useState object to get handle for get and set called a hook in react, initialized with 0

```JSX
const [counter, setCounter] = userState(0)
```
* Labels rendered can take dynamic value, Example below:N

```JSX
function Button() { 
  const [counter, setCounter] = useState(0);  
  return <button onClick={() => setCounter(counter+1)} > {counter}</button>; 
}
```
* JSX can be highly nested and is necessary to represent complex html pages. Child elements can be accessed using ```props.children```
* Child elements can be displayed using conditional displayed. ```ConditionalDisplay(props)``` is a React component used for this. Example -> 

```JSX
  
const state = {
  showVal: true,
};

function ConditionalDisplay(props) {
  return <div>{props.isVisible ? props.children : null}</div>;
}

ConditionalDisplay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
 
<ConditionalDisplay isVisible={state.showVal}>
   <h1>A <span>Home</span></h1>
   <Home/>
</ConditionalDisplay>
  
```

* to pass multiple attributes as state, spread format is used. Example:

```JSX
// Use Three dots to indicate there are multiple variables in the argument
<FunctionName {...stateVariableName}/>  
```
  

### Mapping of HTML element with JSX
> HTML

```html
  <label for="name" class="header" style="background-color: yellow"> Display Text </label>
```
  
> JSX

```JSX
  <label htmlFor="name" className="highlight" style={{backgroundColor: "yellow"}}> Display Text </label> 
```
  
* HTML expects a css element for the label ```style```  <b> Vs. </b> JSX expects json like structure for style
* JSX : attribute names are written as camelCase. ```for``` and ```class``` are javascript reserved attribute names, hence JSX uses ```htmlFor``` and ```className``` as JSX attribute names 
  
* React ignores/ escapes by default any content such as html as value of html, this prevents Cross site scripting attack. But there is a way to send it, avoid it as much as possible
  

### Different Types of Events Supported by React
#### DOM Events: Events created by the browser
* Button click event, change event, text input, form submission -> React <strong>SynthenticEvent</strong> object uses this to handle DOM events
* Example of Event handling :
```JSX
function Events(props) {
  const clickHandler = console.log;
  return <button onClick={clickHandler}>Click Here</button>;
}

ReactDOM.render(
  <Events />,
  document.getElementById("root")
);
```
* Sometimes, it is important to prevent default browser behavior while react is handling DOM event. ```preventDefault()``` method is used for the same. For example in a single webpage, only for partial submission of data, we want to disable form submission that results in page reloading. Example code below ->

```JSX
function NoCheck() {
  return (
    <input type="checkbox" onClick={(e) => {
        e.preventDefault();
      }}
    />
  );
}
```
#### Component Events: Domain specific events done at a higher abstract. e.g. task added, application state changed
* Called by passing function as prop, used to get data out of a component
* Example of combination of DOM Event (clickHandler) and Component Event (onEvenClick) below. This checks for number of clicks and logs to console on every even count of clicks => 
  
```JSX
class EventCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.clickHandler = this.clickHandler.bind(this);
  }
  render() {
    return (
      <div onClick={this.clickHandler}>
        This div has been clicked {this.state.clicks} times.
      </div>
    );
  }

  clickHandler(event) {
    const clickNew = this.state.clicks + 1;
    this.setState({ clicks: clickNew });
    if (clickNew % 2 === 0) {
      this.props.onEvenClick(clickNew);
    }
  }
}
  
ReactDOM.render(
  <EventCounter
    onEvenClick={(data) => {
      console.log(`Even clicked : ${data} `);
    }}
  />,
  document.getElementById("root")
);
```
