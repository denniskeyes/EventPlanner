import { Component, OnInit } from '@angular/core';
import { EventsControllerService } from './events-controller.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {

  constructor(private eventsController: EventsControllerService) { }

  singleEvent;
  eventId = 1; // Pass this in from parent

  ngOnInit() {
  }

  //TODO (future): handle modification of selected event here
  getEvent() {
    this.eventsController.get(this.eventId).subscribe((data: any) =>
      this.singleEvent = data);
  }

}
