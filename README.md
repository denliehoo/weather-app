# Weather Application

Weather application that allows user to get the weather. Demo application deployed at: https://weather-app-f8904.web.app/

## Installation:

1. In terminal: npm install
2. Create .env in root folder with these details:
   - Weather API Keys from: https://openweathermap.org/api
   - Geolocation API Keys from: https://rapidapi.com/wirefreethought/api/geodb-cities
   ```Javascript
   REACT_APP_WEATHER_API_KEY=WEATHER_API_KEY_HERE
   REACT_APP_GEO_API_KEY=GEO_API_KEY_HERE
   ```
3. In terminal: npm start

## Documentation

1. Weather Search and Display:

   - Users can search for weather by typing and selecting a city in an auto-complete input box.
   - Upon choosing a city, the weather for that city is displayed.

2. Auto-Complete Feature:

   - The auto-complete feature for cities is fetched from the GeoDB Cities API in Rapid API.

3. Weather Details:

   - Weather details are fetched from the OpenWeather API.

4. Enhanced User Experience:

   - Originally, the requirement was to input city and country separately and click a search button. Now, users only need to select a city.
   - Weather is automatically displayed after selecting a valid city, thus, reducing user errors.

5. Clear Weather Display:

   - Users can clear the displayed weather by clicking the 'X' button.
   - Users can also search for weather for different cities by typing and selecting.

6. Search History:

   - Successfully fetched weather details and time of usage appear in the search history.
   - Search history is stored in the client's local storage, persisting even after browser closure or refresh.

7. Search History Management:

   - Users can delete all history records using the "Delete History" button.
   - Users can also delete all history by clearing their local storage.
   - Individual records can be deleted using the delete icon button.
   - Users can also search for weather again based on search history.

8. Styling & Designs:
   - CSS class names using BEM Convention.
   - Responsive frontend which is optimized for screen sizes with a width of 320px and above.
   - Created several reusable components (e.g. Modal, Button).
