# Meet App

This project was created using Create React App.  This was a part of my full-stack web development course at CareerFoundry.

## Available Scripts
In the project directory, you can run the follwoing scripts.

### `npm start`
Runs the application in development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.
Refer to the documentation for more information on running tests.

### `npm run build`
Builds the application for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes.
Your application is now ready to be deployed!

Refer to the documentation for more information on deployment.

### `npm run eject`
##### Note: This is a one-way operation. Once you eject, you can't go back!

If you're not satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc.) directly into your project, giving you full control over them. All of the commands except eject will still work, but they will point to the copied scripts, allowing you to modify them. At this point, you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and medium deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you're ready.

## Learn More
To learn more about Create React App, you can refer to the [official documentation](https://create-react-app.dev/).

For React-specific information and documentation, visit the [React documentation](https://react.dev/).

### Code Splitting
This section has been moved [here](https://create-react-app.dev/docs/code-splitting/).

### Analyzing the Bundle Size
This section has been moved [here](https://create-react-app.dev/docs/analyzing-the-bundle-size/).

### Making a Progressive Web App
This section has been moved [here](https://create-react-app.dev/docs/making-a-progressive-web-app/).

### Advanced Configuration
This section has been moved [here](https://create-react-app.dev/docs/advanced-configuration/).

### Deployment
This section has been moved [here](https://create-react-app.dev/docs/deployment/).

### `npm run build` Fails to Minify
This section has been moved [here](https://create-react-app.dev/docs/troubleshooting/#npm-run-build-fails-to-minify).

Feel free to reach out if you need further assistance or have any questions!



#User Stories 

### Feature 1: 
#### As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

##### Scenario 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city 
When the user opens the app 
Then the user should see a list of all upcoming events

##### Scenario 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open 
When user starts typing in the city textbox 
Then the user should see a list of cities (suggestions) that match what they’ve typed

##### Scenario 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing 
When the user selects a city (e.g., “Berlin, Germany”) from the list 
Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city

### Feature 2: 
#### As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

##### Scenario 1: An event element is collapsed by default
Given a list of events has opened
When user scrolls through events 
Then all details should be hidden

##### Scenario 2: User can expand an event to see its details
Given list of events has opened
When user clicks on a event 
Then the event details should be expanded

##### Scenario 3: User can collapse an event to hide its details
Given event details has expanded 
When user clicks hide button 
Then event details should be hidden

### Feature 3: 
#### As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

##### Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the number of displayed events has not been specified by the user 
When event list is shown 
Then the default number of events displayed should be 32

##### Scenario 2: User can change the number of events they want to see
Given user has specified the number of displayed events to 4 
When the event list is shown 
Then the number of events displayed should be 4

### Feature 4: 
#### As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

##### Scenario 1: Show cached data when there’s no internet connection
Given the user has no internet connetion
When the user opens the app 
Then the app should display cached data

##### Scenario 2: Show error when user changes the settings (city, time range)
Given the user has no internet connection 
When the user opens the app and changes the settings (city, time range) 
Then a error should be displayed

### Feature 5 
#### As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

##### Scenario 1: Show a chart with the number of upcoming events in each city
Given the user has not chosen a city 
When the app is open 
Then a chart with the number of upcoming events in each city should be shown


Scenario 1: Show a chart with the number of upcoming events in each city
Given the user has not chosen a city 
When the app is open 
Then a chart with the number of upcoming events in each city should be shown
