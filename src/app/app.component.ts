import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootData } from './RootData';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';

  siteLists: RootData = {
    latitude: 0,
    longitude: 0,
    generationtime_ms: 0,
    utc_offset_seconds: 0,
    timezone: "",
    timezone_abbreviation: "",
    elevation: 0,
    current_units: {
      time: "",
      interval: "",
      temperature_2m: "",
      wind_speed_10m: ""
    },
    current: {
      time: "",
      interval: 0,
      temperature_2m: 0,
      wind_speed_10m: 0
    },
    hourly_units: {
      time: "",
      temperature_2m: "",
      relative_humidity_2m: "",
      wind_speed_10m: ""
    },
    hourly: {
      time: [],
      temperature_2m: [],
      relative_humidity_2m: [],
      wind_speed_10m: []
    },
  };
  constructor(private serviceName: WeatherServiceService) {}
  ngOnInit() {
    this.serviceName.getData().subscribe({
      next: (data) => {
        console.log(data)
        this.siteLists = data;
        console.log("lists", this.siteLists)
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("complete");
      }
    })
  }
}
