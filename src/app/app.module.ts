import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { Direct1Directive } from './direct1.directive';
import { Direct2Directive } from './direct2.directive';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimationsComponent } from './animations/animations.component';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    Direct1Directive,
    Direct2Directive,
    SearchComponent,
    FilterPipe,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'search',
        component:SearchComponent

      },
      {
        path:'animation',
        component:AnimationsComponent

      },
      { path: 'a', loadChildren: () => import('./a/a.module').then(m => m.AModule) },
      { path: 'b', loadChildren: () => import('./b/b.module').then(m => m.BModule) }
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
