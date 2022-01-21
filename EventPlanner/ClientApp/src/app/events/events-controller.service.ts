import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEvent } from './IEvent';

@Injectable({
  providedIn: 'root'
})
export class EventsControllerService {

  constructor(private http: HttpClient) { }

  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) } // Might want individual endpoints to determine their headers, but for now this is fine

  get(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`./api/controller/event/${id}`)
      .pipe(catchError(handleError<IEvent>('getEvent')));
  }

  getAllEvents(): Observable<Array<IEvent>>{
    return this.http.get<Array<IEvent>>(`./api/controller/events`)
      .pipe(catchError(handleError<Array<IEvent>>('getAllEvents')));
}

  createEvent(event: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>(`./api/controller/create-event`, event, this.options)
      .pipe(catchError(handleError<IEvent>('getEvent')));
  }

  deleteEvent(id: number): Observable<IEvent> {
    return this.http.delete<IEvent>(`./api/controller/delete-event/${id}`)
      .pipe(catchError(handleError<IEvent>('deleteEvent')));
  }
}

// rxjs error handler
function handleError<T>(operation = 'operation', result ?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
  }
}


