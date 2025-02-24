# Local Weather

This is an Angular technical challenge where the participant must obtain the local weather forecast using a series of publicly available endpoints.

## Tech

- Node LTS
- Angular 19
- Tailwind

## Goals

On site load, the app should:

1. Get the user's location.
2. Obtain the weather forecast.
3. Display the forecast, which should include the day of the week, temperature, and units.
4. Use RXJS for services and Angular Signals for templates.
   - If you are unfamiliar with Angular Signals, please use RXJS and async pipe for the template layer.

## Stretch Goals

1. Dynamically obtain the weather icon and display it above the temperature.
   - The public API provides a link to the icon.
2. Review service code and provide feedback on how it could be improved.
   - What improvements would you suggest for code readability, error handling, or scalability?
3. Discuss what could be done to make this more 'production ready'.
4. Use Tailwind for styling.

## Instructions

1. Share your screen.
2. Clone the repository.
3. Install packages with `npm install`
4. Run the application with `npm run start`

## Service Overview

A weather service is already configured with some helper methods.

#### `getLocation()`

This method uses browser APIs to obtain the user's geographical location.

```typescript
getLocation(): Observable<GeolocationPosition>
```

#### `getForecast()`

This method uses the latitude and longitude from the `GeolocationPosition` to obtain an array of periods representing the local weather forecast.

```typescript
getForecast(position: GeolocationPosition): Observable<Period[]>
```

## Types Overview

The weather forecast is represented as an array of `Period`

```typescript
export type Period = {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: string | null;
  probabilityOfPrecipitation: {
    unitCode: string;
    value: number | null;
  };
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
};
```
