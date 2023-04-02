import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { Routes } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";
import {Error404Component} from "./errors/404.component"
import { EventRouterActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";
import { CreateSessionComponent } from "./events/index";


export const appRoutes:Routes=[
    { path: 'events/new' , component: CreateEventComponent,
    canDeactivate:['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent,resolve:{events:EventListResolver}},
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: 'events/:id' , component: EventDetailsComponent, canActivate: [EventRouterActivator]},
    { path :'404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', 
      loadChildren: () => import('./user/user.module')
         .then(m=>m.UserModule)
    }  
]