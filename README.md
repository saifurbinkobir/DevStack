# 🚀 DevStack

## 📖 About The Project

DevStack is a one page react project where someone can choose his desirable technologies and can remove them one by one or all at once. This project have a beautiful and eye catchy UI also the UX is really user friendly and smooth.

## 🛠️ Technologies Used

- JS
- TS
- React
- TailWind
- React Toastify

## ✨ Features

> Fully Responsive Webpage

> Dynamic Stack Management

> Live Selection Counter

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

**Ans:** JSX is an extension of JavaScript which allow us to write HTML inside javaScript without DOM. In React it is used because with JSX it's easy to create and mange components.

## 2. What is the difference between props and state?

Props actually used for receiving data while State used to manage data. Props helps to pass data from parent component to child component on the other hand, using state data managed inside a component.

## 3. What does the useState hook do, and where did you use it in this project?

UseState actually store and update data. Usually useState receive 2 parameter, one as a variable to store data and other one a function that change or update the data. In this project I used useState in header to show hamburger menu in mobile also for storing selected stack.

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect used to perform side effects like data fetching after a component renders. As fetching data is a side effect so it should happen after loading components and to do so we need to use useEffect.

## 5. Why does every item in a .map() list need a unique key prop?

React need to identify every item so it can use exact item that we want to use, this is why we need to use key while using map method.

## 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering allow us to change style or components based on different conditions. In this project I used conditional render in multiple place like inside selected stack if it's empty the paragraph will show "No technologies selected yet." also below there's a box "Your stack is empty." with border. On the other hand if there's one or more stack selected then stacks will show. Moreover in those stack cards in buttons, once a stack is selected button text will change, card border will appear but if not selected then border will be default one and button text is "Add to Stack"

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

To pass data from a parent component to child component we should use props. While, to send something from child to parent we need a callback function as a prop then inside the child component we need to call the function to pass the data.