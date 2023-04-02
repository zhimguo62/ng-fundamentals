import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared";



@Component ({
    templateUrl:'create-event.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
   .error input {background-color:#E3C3C5;}
   .error  ::-webkit-input-placeholder {color: #999;}
   .error  ::-moz-input-placeholder {color: #999;}
   .error  ::-moz-input-placeholder {color: #999;}
   .error  ::-ms-input-placeholder {color: #999;}
  `]

})
export class CreateEventComponent{
    newEvent
    isDirty:boolean = true
    event:any
    constructor(private router: Router, private eventService:EventService){

    }


/* ngOnInit()

{
  this.event ={
  id: 1,
  name: 'Angular Connect',
  date: new Date('9/26/2036'),
  time: '10:00 am',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1057 DT',
    city: 'London',
    country: 'England'
  },
  onlineUrl: 'http://ng.com',
  imgUrl: 'http://ng.com/logo.png',
  }
} */
 
saveEvent(formValues){
  this.eventService.saveEvent(formValues)
  this.isDirty=false
  this.router.navigate(['/events'])

  }

  cancel(){
   this.router.navigate(['/events'])

     }

}
