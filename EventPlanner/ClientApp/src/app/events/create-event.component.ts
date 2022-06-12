import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsControllerService } from './events-controller.service';
import { IEvent } from './IEvent';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  constructor(private eventsController: EventsControllerService, private router: Router) { }

  event: IEvent;

  ngOnInit() {
  }

  createEvent(formValues: IEvent) {
    this.eventsController.createEvent(formValues).subscribe(() => {
      this.event = formValues;
      // Route to events page after creation
      this.router.navigate(['events']);
    })
  }

  cancel() {
    // Route back to home page
    this.router.navigate(['']);
  }

}
