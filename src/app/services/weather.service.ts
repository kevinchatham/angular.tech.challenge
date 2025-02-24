import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { Period } from '../types/period';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private http: HttpClient = inject(HttpClient);

  getForecast(position: GeolocationPosition): Observable<Period[]> {
    const { latitude, longitude } = position.coords;
    const gridPointsUrl = `https://api.weather.gov/points/${latitude},${longitude}`;
    return this.http.get<any>(gridPointsUrl).pipe(
      switchMap((gridPoints) => {
        const forecastUrl = gridPoints.properties.forecast;
        return this.http.get<any>(forecastUrl);
      }),
      map((forecastResponse) => forecastResponse.properties.periods)
    );
  }

  getLocation(): Observable<GeolocationPosition> {
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }
}
