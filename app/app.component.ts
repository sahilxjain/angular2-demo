import {Component} from "angular2/core";
import {Person} from "./person"
import {PeopleService} from "./people.service"
import {PeopleListComponent} from "./people-list.component"

@Component({
    selector: 'my-app',
    template: `<h1>My First {{app}} App</h1>
                <h1> {{title}} </h1>
    
        <ul>
            <li *ngFor="#person of people" [class.selected]="person === selected" (click)="onClick(person)" >{{person.name}} {{person.height}}</li>
        </ul>

        <div style="border:2px solid; display: inline-block;" class="details" *ngIf="selected.name" >{{selected.name}} {{selected.height}}</div> 

         <people-list></people-list>
    `,
    styleUrls: ['app/src/css/my-component.css'],
    providers: [PeopleService]
})

export class AppComponent {

    app:string = 'Angular';
    title:string = 'Star Wars PPlz!!!';


    // Directly Using static data without an service

    // public contacts:People[] = [
    //   {name: 'Luke Skywalker', height: 177, weight: 70},
    //   {name: 'Darth Vader', height: 200, weight: 100},
    //   {name: 'Han Solo', height: 185, weight: 85}
    // ];

    // Now importing above data with a service

    // this shorthand syntax automatically creates and initializes a new private member in the class
    people: Person[] = []; // intialise variable people with class people defined in people.ts
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