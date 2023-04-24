import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewArticleComponent } from './newart.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: NewArticleComponent }
	])],
	exports: [RouterModule]
})
export class NewPostRoutingModule { }
