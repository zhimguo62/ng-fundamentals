import { Component, OnInit } from "@angular/core";
import { eventNames } from "process";
import { EventService } from "./shared/event.service";
import {ToastrService}  from "../common/toastr.service"
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/index";

declare let toastr
@Component ({
    // selector: 'events-List',
    // templateUrl:'./events-list.component.html'

    template:
    `
    <div >
    <h1> Upcoming Angular Events</h1>
    <hr/>
    <div class ="row">
    <div *ngFor = "let event of events" class ="col-md-5">
    <event-thumbnail (click)="handleThumbnailClick(event.name)"   [event] 
    ="event"></event-thumbnail>
     </div>
     </div>
     </div>
     `,
     styles:[`
     .thumbnail {min-height: 310px; }
     .pad-left {margin-left: 20px; }
     .well div {color: red; }
     `]
})
export class EventsListComponent implements OnInit{
  events:IEvent[]
   constructor(private eventService: EventService, private toastr:ToastrService,
    private route:ActivatedRoute) 
{
  
}

ngOnInit(){
 this.events = this.route.snapshot.data['events']
}

handleThumbnailClick(eventName) {
this.toastr.success(eventName)

}
}


