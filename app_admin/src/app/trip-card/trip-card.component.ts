import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})

export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;
  @Output() delete = new EventEmitter<string>;

  tripMessage:undefined|string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService      
  ) {}

  ngOnInit(): void {
  
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  emitDeleteEvent() {
    this.delete.next(this.trip.code);
  }

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

}
