import { Injectable } from "@angular/core"
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import {map} from 'rxjs/operators'
import { EventService } from "./shared/event.service"

@Injectable()

export class EventListResolver implements Resolve<any>{
    constructor(private eventSverive: EventService){

    }
    resolve() {
        return this.eventSverive.getEvents()

     //   return this.eventSverive.getEvents().pipe(map(events => events))


    }
}