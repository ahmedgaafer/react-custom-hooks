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
  


## Repository Structure

- src/
  - Components/
    > add your new component here
    
    -index.js => [***add the new component here with it own props***](#adding-component-to-indexjs)
  - HOC/
    > Higher order components used for displaying the hook box on the web page
  - Hooks/
    > Write the actual hook here
    
    
    

# Pull Request Guide

  1- Navigate to the [Hooks Folder](#repository-structure)
  
  2- [Create a new JS file containing the hook logic](#creating-the-hook)
  
  3- Navigate to the [Components Folder](#repository-structure)
  
  4- [Create the component that displays the new hook's functions](#creating-the-component-that-uses-the-hook)
    
  - Don't forget:
    - Add the github Icon that leads to the hook src code will be simmilar to this 
      > [https://github.com/ahmedgaafer/react-custom-hooks/blob/master/src/Hooks/${HookFileName}](#)
    - exporting the component using the HOC withBox
      ```js 
      export default withBox(Counter); 
      ```
      
  5- Navigate to the [index.js File](#repository-structure)
  
  6- [Add the new component you created to the file](#adding-component-to-indexjs)

    
# Using our default styling

   We use [MatrialUI](https://mui.com/) for react components and the [Material Icons](https://mui.com/components/material-icons/) for Icons.
   
   For buttons and Icons use the default constants:
  


# Code Examples on How to contribute

  ### Creating the Hook
  
  ```js
  import { useState } from 'react';

  export function useCounter(initialCount = 0) {
    const [value, setState] = useState(initialCount);
    return {
      value,
      increase: () => setState(value + 1),
      decrease: () => setState(value - 1),
      reset: () => setState(0),
    };
  }
  ```
  
  ### Creating the component that uses the Hook
  
  ```js
  
  ```

  
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
  
