import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight/highlight.directive'; 
import { FooterComponent } from './components/footer/footer.component'; 
import { HeaderComponent } from './components/header/header.component'; 
import { MaterialModule } from '../material/material.module'; 
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    HighlightDirective,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatBadgeModule
  ],
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    MatBadgeModule
  ]
})
export class SharedModule { }
