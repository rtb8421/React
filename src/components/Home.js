import React from 'react'

function Home(){
    return(
        <>
        <div className='home'>

        <h1>Welcome to the Demo App</h1>
        <p>
          History of React React was invented by Facebook developers who found the
          traditional DOM slow. By implementing a virtual DOM, React addressed this
          issue and gained popularity rapidly. The current stable version of ReactJS
          is 18.2.0, released on June 14, 2022. The library continues to evolve,
          introducing new features with each update. How does React work? React
          operates by creating an in-memory virtual DOM rather than directly
          manipulating the browser’s DOM. It performs necessary manipulations within
          this virtual representation before applying changes to the actual browser
          DOM. React is efficient, altering only what requires modification.
          Browser-DOM-Virtual-DOM Features of React React is one of the most demanding
          JavaScript librarys because it is equipped with a ton of features which
          makes it faster and production-ready. Below are the few features of React.
          1. Component-Based Architecture React provides the feature to break down the
          UI into smaller, self-contained components. Each component can have its own
          state and props. 2. JSX (JavaScript Syntax Extension) JSX is a syntax
          extension for JavaScript that allows developers to write HTML-like code
          within their JavaScript files. It makes React components more readable and
          expressive. const name="GeekforGeeks";
        </p>
        </div>
        
      </>
      
        
    );
}
export default Home;