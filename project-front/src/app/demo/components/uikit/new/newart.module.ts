import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { NewPostRoutingModule } from './newart-routing.module';
import { NewArticleComponent } from './newart.component';





@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NewPostRoutingModule,
		FileUploadModule,
	
	],
	declarations: [NewArticleComponent],
})
export class NewArticleModule { }
