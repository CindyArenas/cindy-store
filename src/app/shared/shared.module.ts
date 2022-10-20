import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight/highlight.directive'; 
import { FooterComponent } from './components/footer/footer.component'; 
import { HeaderComponent } from './components/header/header.component'; 

@NgModule({
  declarations: [
    HighlightDirective,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
