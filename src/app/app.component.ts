import { Component, inject } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { Period } from './types/period';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private _weatherService: WeatherService = inject(WeatherService);
}
