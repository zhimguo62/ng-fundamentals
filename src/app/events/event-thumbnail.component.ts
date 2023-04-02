import { Component,Input, Output,EventEmitter } from "@angular/core";
import { IEvent } from "./shared/index"; 

@Component ({
    selector: 'event-thumbnail',
    // templa teUrl:'./events-list.component.html'
    template:
    `
    
    <div  [routerLink] ="['/events',event.id]" class="well hoverwell thumbnail">
    <h2> {{event?.name}} </h2>
    <div> Date: {{event?.date}} </div>
    <div> time: {{event?.time}} </div>
    <div> Price: \${{event?.price}} </div>
        <div *ngIf ="event?.location">
        <span>Location:{{event?.location?.address}}</span>
        <span class="pad-left"></span>
        <span>{{event?.location?.city}}, {{event?.location?.country}}</span>   
        </div>
    </div>  
    `,
  styles:[`
  .thumbnail {min-height: 210px}
  .pad-left {margin-left:20px;}
  .well div {color: #bbb; }
  `]
})
export class EventThumbnailComponent{
   @Input() event:IEvent
//    someProperty:any ="Good Morning, Foo"

//    logFoo()
//    {
//       console.log('got you')

//    }

}

