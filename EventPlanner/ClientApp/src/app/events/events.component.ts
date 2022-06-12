import { Component, OnInit } from '@angular/core';
import { EventsControllerService } from './events-controller.service';
import { IEvent } from './IEvent';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventsController: EventsControllerService) { }

  allEvents: IEvent[];
  loaded: boolean = false;
  singleEvent;

  ngOnInit() {
    this.getAllEvents();
    this.loaded = true;
  }

  getAllEvents() {
    this.eventsController.getAllEvents().subscribe((data: any) => {
      this.allEvents = data;
    });
  }
}
