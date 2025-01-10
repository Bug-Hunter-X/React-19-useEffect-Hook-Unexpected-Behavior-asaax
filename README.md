# React 19 useEffect Hook Unexpected Behavior

This repository demonstrates a subtle bug in React 19 related to the `useEffect` hook. The issue involves a scenario where the effect unexpectedly doesn't re-run when the component's state changes.

## Bug Description
The bug occurs due to an omission in the `useEffect` dependency array. This leads to the effect running only once during the initial render, despite state changes in the component. 

## Setup
Clone this repository, navigate to the project's root folder and run:
```
npm install
```

## How to Reproduce
1. Run the application.
2. Observe that the 'Effect runs' log message appears only once, even after clicking the button which increments the count.
3. The 'Cleanup runs' message also exhibits unexpected behavior, highlighting the incorrect effect lifecycle.

## Solution
Refer to the solution provided in `bugSolution.js` to fix this issue. The resolution involves adding the necessary dependencies to the useEffect array to correctly track state changes.  This ensures the effect runs whenever the state is updated.