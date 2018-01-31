import { Routes } from '@angular/router';
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventListsComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator';
import { EventListResolver } from './events/events-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventListsComponent,resolve:{events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent,canActivate: [EventRouteActivator]},
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
  ]