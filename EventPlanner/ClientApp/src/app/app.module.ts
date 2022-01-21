import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './events/create-event.component';
import { SingleEventComponent } from './events/single-event.component';
import { DeleteEventComponent } from './events/delete-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EventsComponent,
    CreateEventComponent,
    SingleEventComponent,
    DeleteEventComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'create-event', component: CreateEventComponent },
      { path: 'events', component: EventsComponent },
      { path: 'events/:id', component: SingleEventComponent },
      { path: 'events/delete/:id', component: DeleteEventComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
