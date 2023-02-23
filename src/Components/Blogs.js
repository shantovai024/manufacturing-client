import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className="blog-area py-12 grid grid-cols-3 gap-5">
                <div className="single-blog">
                    <h3 className="text-3xl"> How will you improve the performance of a React Application?</h3>
                    <p>There are several ways to improve the performance of a React application. Optimize render methods is of the most common reasons for poor performance in a React application is due to excessive rendering of components. React.lazy and Suspense allow us to split our code into smaller chunks, which can improve the initial loading time of our application. State management libraries like Redux can help to manage the state of your application more efficiently, which can improve performance.</p>
                </div>
                <div className="single-blog">
                    <h3 className="text-3xl">What are the different ways too manage state in a React Application?</h3>
                    <p>Managing state in React app isn't as simple as using usestate oor useReducer.There are different kinds of states and there are a lot of ways to managing thoose states.There are some kinds of react states. Local state,Global state,Server State,URL state. We manage our local state using useState most of the time. Global state is data we manage across multiple components. </p>
                    <p>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least Server state Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. URL state is often missing as a category of state, but it is an important one. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                </div>
                <div className="single-blog">
                    <h3 className="text-3xl">How does prototypical inheritence works? </h3>
                    <p>Every object with its methods and properties contains an internal and hidden property known as . The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto.</p>
                </div>
                <div className="single-blog">
                    <h3 className="text-3xl">Why we do not set the state directly in React?</h3>
                    <p>In react state is an important concept.Normally we call this as "const [state,setState]= useState()".But if we set the state value directly we won't find the updated value.State doesn't update imediately.Instead it creates a pending state teansition,and accessing it after calling this method will only return the present value. We will lose control of the state across all components.So we don't set the state directly.</p>
                </div>
                <div className="single-blog">
                    <h3 className="text-3xl"> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                    <p>To find the expected result I can make filter option to search from the product. Example: const filterd = products.filter(product=/product.name.includes(searchText)) This filtered will give an array including all the objects which includes the searchText.</p>
                </div>
                <div className="single-blog">
                    <h3 className="text-3xl">What is a unit test? Why should write unit tests? </h3>
                    <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                </div>
            </div>
        </>
    );
};

export default Blogs;