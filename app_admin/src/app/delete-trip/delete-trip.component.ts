import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  standalone: true,
  imports: [],
  templateUrl: './delete-trip.component.html',
  styleUrl: './delete-trip.component.css'
})
export class DeleteTripComponent implements OnInit {
  message : string = '';

  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something is wrong, couldn't find where I stashed the tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log("DeleteTripComponent found tripCode " + tripCode);

    this.tripService.deleteTrip(tripCode).subscribe({
      next: (value:any) => {
        console.log(value);
        this.router.navigate(['']);
      },
      error: (error:any) => {
        console.log('Error: ' + error);
      }
    });
  }

}
