import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventsControllerService } from './events-controller.service';
import { IEvent } from './IEvent';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {

  constructor(private eventsController: EventsControllerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  singleEvent: IEvent;

  ngOnInit() {
    // On page load, fetch the current event
    this.getEvent();
  }

  getEvent() {
    this.eventsController.get(+this.activatedRoute.snapshot.params['id']).subscribe((data: any) => {
      this.singleEvent = data;
    });
  }

  updateEvent(formValues: IEvent) {
    this.eventsController.updateEvent(this.singleEvent.id, formValues).subscribe(() => {
      this.singleEvent = formValues;
      // Route to events page after creation
      this.router.navigate(['events']);
    })
  }

  cancel() {
    // Route back to home page
    this.router.navigate(['events']);
  }

}
