import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'new', data: { breadcrumb: 'New' }, loadChildren: () => import('./new/newart.module').then(m => m.NewArticleModule) },
        { path: '', data: { breadcrumb: 'Media' }, loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UIkitRoutingModule { }
