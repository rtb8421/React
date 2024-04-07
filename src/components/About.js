import React from 'react'

function About(){
    return(
        <>
        <h1>
          Welcome to React
        </h1>
        3. Virtual DOM React maintains a lightweight representation of the actual
        DOM in memory. When changes occur, React efficiently updates only the
        necessary parts of the DOM. sd 4. One-way Data Binding One-way data binding,
        the name itself says that it is a one-direction flow. The data in react flows
        only in one direction i.e. the data is transferred from top to bottom i.e.
        from parent components to child components. The properties(props) in the child
        component cannot return the data to its parent component but it can have
        communication with the parent components to modify the states according to the
        provided inputs. 5. Performance As we discussed earlier, react uses virtual
        DOM and updates only the modified parts. So , this makes the DOM to run
        faster. DOM executes in memory so we can create separate components which
        makes the DOM run faster. 6. Components React divides the web page into
        multiple components as it is component-based. Each component is a part of the
        UI design which has its own logic and design as shown in the below image. So
        the component logic which is written in JavaScript makes it easy and run
        faster and can be reusable. 7. Single-Page Applications (SPAs) React is
        recommended in creating SPAs, allowing smooth content updates without page
        reloads. Its focus on reusable components makes it ideal for real-time
        applications. ReactJS Lifecycle Every React Component has a lifecycle of its
        own, lifecycle of a component can be defined as the series of methods that are
        invoked in different stages of the component’s existence. React automatically
        calls these methods at different points in a component’s life cycle.
        Understanding these phases helps manage state, perform side effects, and
        optimize components effectively.Below are the few features of React.
          1. Component-Based Architecture React provides the feature to break down the
          UI into smaller, self-contained components. Each component can have its own
          state and props. 2. JSX (JavaScript Syntax Extension) JSX is a syntax
          extension for JavaScript that allows developers to write HTML-like code
          within their JavaScript files. It makes React components more readable and
          expressive. const name="GeekforGeeks";Below are the few features of React.
         
        </>

        
    );
}
export default About;