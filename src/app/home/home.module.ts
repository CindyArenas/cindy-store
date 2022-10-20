import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from "./../shared/shared.module";
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
 declarations:[
    BannerComponent,
    HomeComponent, 
    
 ], 
 imports:[
  CommonModule,
   HomeRoutingModule,
   SharedModule,
   MatIconModule,
   MatBadgeModule
 ]   
})
export class HomeModule {

}