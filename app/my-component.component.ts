import {Component} from "angular2/core";

@Component({
    selector: 'my-app',
    template: `<h1>First App By {{name}} </h1>
        <ul>
            <li *ngFor="#contact of contacts" [class.selected]="contact === selected" (click)="onClick(contact)" >{{contact.firstname}} {{contact.lastname}}</li>
        </ul>

        <div style="border:2px solid; display: inline-block;" class="details" *ngIf="selected.firstname" >{{selected.firstname}} {{selected.lastname}}</div> 
    `,
    styleUrls: ['src/css/my-component.css']
})

export class MyComponentComponent {
    public name = 'Sahil Jain';
    public contacts = [
        {firstname:"sahil",lastname:"Jain"},
        {firstname:"Vishal",lastname:"Kumar"},
        {firstname:"Rohit",lastname:"Dhiman"}
    ];

    selected = [];


    onClick(c){
        this.selected = c;
        //console.log(Object.keys(this.selected).length);
    }
}