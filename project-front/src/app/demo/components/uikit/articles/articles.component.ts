import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';
import { NgForm } from '@angular/forms';


@Component({
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {


 
    comment:string="";
    constructor(private articleService:ArticleService) { }
    articles:Article[]=[];
    ngOnInit() {
       this.articleService.getAllArticles().subscribe(
        (response:Article[])=>{
            this.articles=response
        }
       )
    }
    addComment(articleId:string,form:NgForm){
        this.articleService.addComment(articleId,form.value.comment).subscribe(
            (response)=>{
                this.articleService.getAllArticles().subscribe(
                    (response:Article[])=>{
                        this.articles=response
                    }
                   )
            }
        )
    }

    
}
