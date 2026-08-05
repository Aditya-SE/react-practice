# Lottery Game (React)

A simple Lottery Game built with **React** that generates a random lottery ticket every time the user clicks the **Buy New Ticket** button. If the sum of all ticket numbers matches the winning sum, the user wins!

## Features

- Generates random lottery tickets
- Displays ticket numbers using reusable components
- Checks if the ticket is a winning ticket
- Built using React functional components and Hooks
- Uses reusable helper functions for ticket generation and sum calculation

## Technologies Used

- React
- JavaScript (ES6+)
- CSS
- Vite

## Project Structure

```
src/
│── App.jsx
│── Lottery.jsx
│── Ticket.jsx
│── TicketNum.jsx
│── helper.js
│── App.css
│── Lottery.css
│── TicketNum.css
```

## How It Works

1. A random ticket is generated when the app loads.
2. Each ticket contains random digits (0–9).
3. Clicking **Buy New Ticket** generates a new ticket.
4. If the sum of the ticket numbers equals the winning sum, a winning message is displayed.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### Navigate to the project

```bash
cd your-repository-name
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

## Concepts Practiced

- React Components
- Props
- State (`useState`)
- Event Handling
- Conditional Rendering
- Array Mapping
- Reusable Components
- Helper Functions

## Future Improvements

- Allow users to choose the number of ticket digits.
- Add difficulty levels.
- Display ticket history.
- Add animations and sound effects.
- Keep track of wins and losses.

⭐ If you found this project helpful, consider giving the repository a star!
