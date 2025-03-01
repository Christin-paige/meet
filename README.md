# The Meet App

### Meet is a serverless progressive web application (PWA) with React using a test driven development (TDD) technique.  The application uses the Google calendar API to fetch upcoming events.

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

  
### How will the Meet App use serverless functions?
- By obtaining access and authorization. 
- Scaling automatically as the user base grows or the amount of usage increases. 
- Create, update, and delete events.
- Provide real-time notifications and updates based on Google Calendar.
