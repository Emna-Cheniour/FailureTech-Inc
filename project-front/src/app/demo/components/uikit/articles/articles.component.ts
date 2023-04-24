import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {


 
    test:string='<h1> this is h1 </h1> <h2> this is h2 </h2><br>hello'
    constructor() { }

    ngOnInit() {
       
    }
    
}
