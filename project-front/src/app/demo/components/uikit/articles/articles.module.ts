import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaDemoRoutingModule } from './articles-routing.module';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from "primeng/divider";
import { ArticlesComponent } from './articles.component';
import { FormsModule } from '@angular/forms';
@NgModule({
	imports: [
		CommonModule,
		MediaDemoRoutingModule,
		ButtonModule,
		ImageModule,
		GalleriaModule,
		CarouselModule,
		DividerModule,FormsModule
	],
	declarations: [ArticlesComponent]
})
export class ArticlesModule { }
