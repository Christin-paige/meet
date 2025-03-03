# The Meet App

### Meet is a serverless progressive web application (WPA) with React using a test driven development (TDD) technique.  The application uses the Google calendar API to fetch upcoming events.

## Features

- **Filter Events By City**: Users can search for events by city.
- **Show/Hide Event Details**: Expand/collapse event details.
- **Specify Number of Events**: Users can control the number of displayed events.
- **Offline Support**: Cached data is available when offline.
- **Installable PWA**: Users can install the app on their home screen.
- **Event Data Visualization**: Displays charts for event trends.

## Getting Started

### Prerequisites

Before cloning and running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (Comes with Node.js)

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Christin-paige/meet.git
   ```
2. **Install dependencies:**
```sh
npm install
```
3. **Start the development server**
```sh
npm start
```
4. **Build for production**
```sh
npm run build
```
5. **Deploy to GitHub Pages**
```sh
npm run deploy
```

## Running the App
To start the development server
```sh
npm start
```
This will open the app in your default browser at http://localhost:3000/

## Running Tests
To run unit and integration tests:
```sh
npm test
```
To check coverage:
```sh
npm run coverage
```

## Deployment 
This project is deployed using GitHub Pages. To deploy the latest version:
```sh
npm run deploy
```

# Features and Scenarios

## Feature 1: Filter Events By City 
### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. 
- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of upcoming events
### Scenario 2: User should see a list of suggestions when they search for a city. 
- Given the main page is open
- When the user starts typing in the city textbox
- Then the user should receive a list of cities (suggestions) that match what they’ve typed.
### Scenario 3: User can select a city from the suggested list.
- Given user was typing “Berlin” in the city textbox AND the  list of suggested cities is showing
- When the user selects a city (e.g., “Berlin") from the list
- Then their city should be changed to that city AND the user should receive a list of upcoming events in that city.


## Feature 2: Show/Hide Event Details 
### Scenario 1: An event element is collapsed by default. 
- Given a user wants to see event details.
- When the user selects an event
- Then the element will expand to show the event details.
### Scenario 2: User can expand an event to see details. 
- Given the user would like to see more information about an event
- When the user selects the event
- Then the event will expand to show the details.
### Scenario 3: User can collapse an event to hide details.
- Given the user wanted to hide information about the event
- When user selects event details
- Then event details will collapse

 ## Feature 3: Specify Number of Events
### Scenario 1: When user hasn’t specified a number, 32 events are shown by default. 
- Given the main page is open
- When a user has not specified a number
- 32 events will be shown by default

### Scenario 2: User can change the number of events displayed. 
- Given there are 32 events shown by default
- When the user specifies a number
- Then the specified number of events will be displayed.

## Feature 4: Use the App When Offline 
### Scenario 1: Show cached data when there’s no internet connection. 
- Given the user is offline
- When user would like to see events already viewed online
- Then user will have access to those events offline
### Scenario 2: Show error when user changes search settings (city, number of events). 
- Given the user changes search settings
- When shown an error
- Then the app will go to cached city, events

## Feature 5: Add an App Shortcut to the Home Screen
### Scenario 1: User can install the meet app as a shortcut on their device home screen.
- Given the wants access to the meet app on their personal device
- When user downloads the app
- Then a shortcut will be accessible on their device’s home screen

## Feature 6: Display Charts Visualizing Event Details 
### Scenario 1: Show a chart with the number of upcoming events in each city.
- Given a user would like to see a chart of upcoming events
- When user selects a city
- Then a chart of all events will appear for that city.

  
### Serverless Functions Usage
Meet App uses serverless functions for:
- Google Calendar API authentication & authorization 
- Scaling automatically as the user base grows or the amount of usage increases
- Creating, updating, and deleting events
- Providing real-time notifications and updates

# Technologies used
- React - Frontend framework
- Recharts - Data Visualization
- Google Calendar API - Fetch events
- Jest & Puppeteer - Testing
- Workbox - Offline support
- Github Pages - Deployment

# Contributing
Pull requests are welcome! To contribute:
1. Fork the repository
2. Create a new branch 
```sh
git checkout -b feature-branch-name
```
3. Make your changes
4. Commit your changes
```sh
git commit -m "Describe your changes"
```
5. Push to the branch
```sh
git push origin feature-branch-name
```
6. Create a Pull Request


