# React Stopwatch with Lap Functionality

## Overview

This project is a full-stack React application that implements a stopwatch with lap functionality. Users can start, stop, and reset the stopwatch, as well as record laps. The frontend is built using React, and the backend uses a simple JSON Server to store lap data.

## Features

- **Start/Stop:** Users can start and stop the stopwatch.
- **Reset:** Users can reset the stopwatch to zero.
- **Lap:** Users can record laps while the stopwatch is running.
- **Display:** The application displays the elapsed time and a list of recorded laps.

## Optional Requirements

- **Keyboard Shortcuts:** Add keyboard shortcuts for controlling the stopwatch (e.g., spacebar to start/stop, R to reset).
- **Responsive Design:** Ensure that the application is fully responsive and works well on various devices and screen sizes.

## Getting Started

To get started with the project, follow these steps:

1. Run `npm i` to install the project dependencies.

2. Install JSON Server using `npm install -g json-server`.

3. Run `npx json-server db.json` in your terminal to start the JSON Server. The API will be available at `http://localhost:3000/`. You can make changes to the `db.json` file and restart the server to update your data structures.

4. Navigate to the project directory and start the frontend React application using `npm run dev`.

## Documentation For JSON Server
`https://github.com/typicode/json-server`

## Assessment Criteria

When assessing this project, consider the following criteria:

- **Functionality:** Does the stopwatch function correctly? Can users start, stop, reset, and record laps as expected?
- **Code Quality:** Is the code well-organized, readable, and maintainable? Are best practices followed?
- **UI/UX:** Is the user interface intuitive and visually appealing? Does it provide clear feedback to the user?
- **Error Handling:** Are errors handled gracefully? Is there appropriate validation and error messaging?
- **API Interaction:** Does the frontend correctly interact with the JSON Server API to perform CRUD operations on lap data?

Feel free to add any additional criteria specific to your assessment requirements.

**Best of luck 🎉**

Regards, 
Team ReachHub
