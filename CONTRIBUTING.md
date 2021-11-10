# Contributing

To contribute to this project simply make a pull request

> Please read the [pull request](#pull-request-guide) guide and example before making the pull request

## Table of content

- [Repository Structure](#repository-structure)
- [Pull request Guide](#pull-request-guide)
- [Using our default styling](#using-our-default-styling)
- [Code Examples on How to contribute](#code-examples-on-how-to-contribute)
  - [Creating the Hook](#creating-the-hook)
  - [Creating the component that uses the Hook](#creating-the-component-that-uses-the-hook)
  - [Adding component to index.js](#adding-component-to-indexjs)
  - [Adding a README to the Component](#adding-a-readme-to-the-component)


## Repository Structure

- src/
  - Components/
    > add your new component here
    
    -index.js => [***add the new component here with it own props***](#adding-component-to-indexjs)
    
    
    

# Pull Request Guide
    
# Using our default styling


# Code Examples on How to contribute

  ### Creating the Hook
  
  ### Creating the component that uses the Hook
  

  
  ### Adding component to index.js
  ```js

  import Counter from './Counter';

  import MyComponent from './MyComponent'; // <=  Importing your new Component

  const components = [
    {
      component: Counter,
      props: {
        link: 'https://github.com/ahmedgaafer/react-custom-hooks/blob/master/src/Hooks/useCounter.js',
      },
    },

    //Add Your component here
    //Start

    {
      component: MyComponent,
      props:{
        // any props you want to pass to the component
      }
    },

    //End
  ];

  export default components;

  ```
  
  ### Adding a README to the Component



