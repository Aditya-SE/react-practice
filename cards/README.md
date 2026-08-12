# Product Cards - React Practice

This is a simple **React.js practice project** created while learning React.
The project focuses on building reusable components, passing data using **props**, and styling components with CSS.

## About the Project

The project displays product information using reusable React components.

It was created to practice:

- React Components
- Props
- Component Reusability
- JSX
- CSS Styling
- Importing and using components
- Breaking a UI into smaller components

## Technologies Used

- **React.js**
- **JavaScript**
- **JSX**
- **CSS**
- **Vite**

## Project Structure

```text
cards/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── Product.jsx
│   ├── Product.css
│   ├── ProductTab.jsx
│   ├── price.jsx
│   ├── msg.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## React Concepts Practiced

### Components

The UI is divided into reusable components such as:

- `Product`
- `ProductTab`
- `Price`
- `Msg`

This helps keep the application organized and makes individual parts easier to reuse.

### Props

Props are used to pass product-related data from one component to another.

### JSX

JSX is used to create the structure of the product cards directly inside React components.

### CSS

CSS is used to style the product cards and create a clean layout.

## Purpose

This project is part of my **React.js learning and practice journey**.

The main goal is to understand the fundamentals of React by building small projects and practicing concepts step by step.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
