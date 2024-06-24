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
  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed the tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log("DeleteTripComponent found tripCode " + tripCode);

    this.tripService.deleteTrip(tripCode)
      .then( data => {
        console.log(data);
        this.router.navigate(['list-trips']);
      });
  }

}
