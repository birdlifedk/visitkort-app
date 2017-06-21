import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent} from './dashboard.component';
import { CampaignComponent} from './campaign.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, 
    CampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
