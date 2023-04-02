import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";

@Component ({
    selector: 'nav-bar',
    templateUrl:'./nav-bar.component.html'

    ,
  styles:[`
  .nav.navbar-nav {font-size: 15px;}
  #searchForm {margin-right: 100px;}
  @media (max-width:1200px) {#searchForm {display:none}}
  li >a.active { color: #F97924; }
  `]

   /*  template:
    `
    
    <div><h1> Upcoming Angular Events</h1>
    <hr/>
   
    <event-thumbnail  #thumbnail [event] = "event1"> </event-thumbnail>

     </div>
     
     `,
     styles:[`
     .pad-left {margin-left:20px;}
     .well div {color: red; }
     `] */
})
export class NavBarComponent{
  constructor(public auth:AuthService){}


}


