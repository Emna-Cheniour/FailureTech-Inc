import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ArticleService } from '../article.service';

@Component({
    templateUrl: './newart.component.html',
    styleUrls: ['./newart.component.css'],
    providers: [MessageService]
})
export class NewArticleComponent {

    uploadedFiles: any[] = [];
    file: any;
    content:string="";
    constructor(private messageService: MessageService,private articleService: ArticleService) {}
    imageSrc: string |ArrayBuffer |null ="";


   readURL(event: any): void {
    if(event){
        if(event.target){
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        this.file = event.target.files[0]
        console.log(this.file);
        const reader = new FileReader();
        reader.onload = e => this.imageSrc= reader.result;

        reader.readAsDataURL(file);
    }
}
}
}
   
   

    saveArticle() {
        console.log(this.file);
        this.articleService.saveArticle(this.file, this.content).subscribe(
          (response:any) => {
            console.log(response);
          },
          (error:any) => {
            console.log(error);
          }
        );
      }

}
