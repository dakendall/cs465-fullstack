import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted=false;
  message : string = '';

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    
    // Retrieve stashed trip ID
    let tripCode = localStorage.getItem("tripCode");
    if(!tripCode) {
      alert("Someting wrong, couldn't find where I stashed tripCode");
      this.router.navigate(['']);
      return;
    }

    console.log('EditTripComponent::ngOnInit');
    console.log('tripcode: ' + tripCode);

    this.editForm = this.FormBuilder.group({
      _id:[],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.tripDataService.getTrip(tripCode)
      .then(data => {
        // console.log(data);
        
        this.editForm.patchValue(data[0]);
        
        console.log("patched")
        // using editForm.setValue() will throw a console error
      })
  }

  public onSubmit() {
    this.submitted = true;

    if(this.editForm.valid){
      this.tripDataService.updateTrip(this.editForm.value)
        .then( data => {
            console.log(data);
            
            this.router.navigate(['list-trips']);
        });
    }
  }

  get f() { return this.editForm.controls; }

}
