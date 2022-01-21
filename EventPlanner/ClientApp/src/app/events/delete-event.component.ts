import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsControllerService } from './events-controller.service';
import { IEvent } from './IEvent';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

  constructor(private eventsController: EventsControllerService, private router: Router, private route: ActivatedRoute) { }

  //@Input() eventToDelete: IEvent;
  eventId: number;
  deletedEventResponse: any;

  ngOnInit() {
    this.eventId = this.route.snapshot.params['id'];
  }

  deleteEvent() {
    this.eventsController.deleteEvent(this.eventId)
      .subscribe((data: any) => {
        this.deletedEventResponse = data;

        // After deleting event, navigate back to events list and reload page to reflect updated list
        this.router.navigate(['events']);
      });

    
  }

  backToEvents() {
    this.router.navigate(['events']);
  }
}
