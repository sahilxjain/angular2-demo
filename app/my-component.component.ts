import {Component} from "angular2/core";
import {People} from "./people"
import {PeopleService} from "./people.service"


@Component({
    selector: 'my-app',
    template: `<h1>First App By {{name}} </h1>
        <ul>
            <li *ngFor="#person of people" [class.selected]="person === selected" (click)="onClick(person)" >{{person.firstname}} {{person.lastname}}</li>
        </ul>

        <div style="border:2px solid; display: inline-block;" class="details" *ngIf="selected.firstname" >{{selected.firstname}} {{selected.lastname}}</div> 
    `,
    styleUrls: ['app/src/css/my-component.css'],
    providers: [PeopleService]
})

export class MyComponentComponent {

    public name:string = 'Demo User';


    // Directly Using static data without an service

    // public contacts:People[] = [
    //     {firstname:"Luke",lastname:"Skywalker"},
    //     {firstname:"Darth",lastname:"Vader"},
    //     {firstname:"Han",lastname:"Solo"}
    // ];

    // Now importing above data with a service

    // this shorthand syntax automatically creates and initializes a new private member in the class
    people: People[] = []; // intialise variable people with class people defined in people.ts
    constructor(private _peopleService: PeopleService){
        this.people = _peopleService.getAll();
    }

    selected = [];


    onClick(c){
        this.selected = c;
        //console.log(Object.keys(this.selected).length);
    }
}


/*
name:string
TypeScript let’s you add type annotation to your variable and function declarations. This helps you with better tooling like intellisense and to catch type errors.

JavaScript classes are just syntactic sugar over the existing prototypical inheritance model.


*/