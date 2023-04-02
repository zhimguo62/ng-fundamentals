import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
 CreateEventComponent,
  EventRouterActivator,
  CreateSessionComponent,
  EventListResolver,
  SessionListComponent
} from './events/index'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {Error404Component} from  './errors/404.component'; 
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  providers: [EventService,
              ToastrService,
              EventRouterActivator,
              AuthService,
              EventListResolver,
              {
                provide:'canDeactivateCreateEvent',
                useValue: checkDirtyState
              }
            ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty)
     return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
