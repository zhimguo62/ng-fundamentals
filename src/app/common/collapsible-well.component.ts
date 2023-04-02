import { Component,Input } from "@angular/core";

@Component ({
    selector: 'collapsible-well',
    template:
    `
    <div (click)="toggleContest()" class="well pointable">
    <h4>
    <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    `
})

export class CollapsibleWellComponent {
    visible: boolean = true;

    toggleContest(){
        this.visible =!this.visible;
    }
}