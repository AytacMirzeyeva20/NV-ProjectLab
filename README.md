Decision Board
Decision Board is a React-based web application that helps users organize and make decisions by creating questions and adding different options.
Users can create multiple decisions, switch between them, select one option, and see the final result.
Technologies
React
JavaScript
Tailwind CSS
React Router
React Icons
LocalStorage
The first Tailwind.Css coordinate this project.
React Router was installed with:
npm install react-router-dom
Then,import this project.
Features
Create a new decision
Add multiple options to a decision

Switch between different decisions

Select one option using radio buttons

Submit a decision and display the selected result

Delete decisions


Automatically open the newly created decision

Save decisions in LocalStorage

Responsive design for desktop and mobile devices

How to Run
1.Install dependencies:
npm install
2.Start the development server:
npm run dev
3.Open the local development URL shown in the terminal.
Technical Decisions
LocalStorage
The project does not use a backend or database because the assignment does not require one.

Decision data is stored in the browser's localStorage. This allows created decisions to remain available after refreshing the page.

Radio Buttons
Radio buttons are used for selecting an option because only one option should be selected for each decision.

This also prevents incorrect results when the user clicks the same option multiple times.

React State
React useState is used to manage decisions, selected options, form inputs, and the current decision.

Component Structure
The application is divided into reusable components such as:
Navbar
Home
DecisionBoard
Sidebar
Main
Future Improvements
Add the ability to edit existing decisions
Add the ability to remove individual options
Add animations and additional UI improvements
Improve decision management with more advanced state management
