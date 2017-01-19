import {Component} from "angular2/core";
import {Contacts} from "./contacts" // Imported class Contacts

@Component({
    selector: 'my-app',
    template: `<h1>First Angular App {{name}} </h1>
        <ul>
            <li *ngFor="#contact of contacts" [class.selected]="contact === selected" (click)="onClick(contact)" >{{contact.firstname}} {{contact.lastname}}</li>
        </ul>

        <div style="border:2px solid; display: inline-block;" class="details" *ngIf="selected.firstname" >{{selected.firstname}} {{selected.lastname}}</div> 
    `,
    styleUrls: ['app/src/css/my-component.css']
})



export class MyComponentComponent {
    public name:string = 'Demo';
    public contacts: Contacts[] = [  // TS type annotation
        {firstname:"Test",lastname:"User"},
        {firstname:"Testt",lastname:"Userr"},
        {firstname:"Demo",lastname:"User"}
    ];

    selected = {};


    onClick(c){
        this.selected = c;
        //console.log(Object.keys(this.selected).length);
    }
}

/* Note: Backticks are used to define the new ES6 template strings. They are a new great feature of ES6 that let’s you write multiline strings natively and insert any expression directly within a string with a very straightforward syntax.

(event)="expression"    Gives info only out 
[directive]="expression"    Gives info only in
{{}}    Two Way binding

*/