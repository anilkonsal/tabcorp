# Temperature Notifier

This nodejs service generates random temperatures for different beer boxes after an interval (configurable in `.env` file in the root of the project). The temperatures for each box are displayed in the console. If the temperature is out of the min and max values foe that box, user will hear the warning message specifying the box names.

Also, when showing the temperatures on the screen,

- if the tempearure is within range, it will be shown in `green` color.
- if it is below the minimum temperature, it will be shown in `blue`
- if it is beyond max temperature, it will be shown in `red` color.

## Environment variables

This service uses `dotenv` package which parses `.env` file in the root of the project and this file has a single variable in it named `INTERVAL_IN_SECONDS` which should be set greater than `15` like this:

```
INTERVAL_IN_SECONDS=15
```

This means that the service will fetch new temperatures after every 15 seconds and speak warnings. `15` seconds is kept to have the warning spoken safely without overlapping.

## How to run?

1. Checkout the code and change to the checked out directory
2. Run

   ```
   yarn
   ```

   or

   ```
   npm install
   ```

3. Set value in `.env` file
4. Set the Volume up of PC/Mac
5. Run `npm start` for stating the service
6. For testing, run `npm test`

## Assumptions

1. The Temperature data will come from a Serial Sensor connected to each beer box
2. This nodejs service will periodically fetch the data from Serial Sensor
3. As Baz will be driving the truck most of the time, it is better to alert him via voice so that he does not have to take eyes off the road.
4. Color coding of different temperatures is done to easy figure out the issues with beer boxes

## Coding Highlights

1. Service is code usind Typescript
2. Proper linting is used (Eslint)
3. OOPs is used
4. Getter and Setter funcitons are used
5. Custom Errors are used insted of standard ones
6. Error handling is done whereever possible
7. Whole code is tested by Jest Unit Tests

## What could have been done in a better way?

1. Could develop a React Native based mobile App as client to show temperatures and send voice notifications like Google Maps
2. GraphQL/REST based API should have been developed to feed the React Native App
