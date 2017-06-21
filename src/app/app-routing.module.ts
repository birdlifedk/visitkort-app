import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { CampaignComponent} from './campaign.component';

const routes : Routes = [
    {path : '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path : 'dashboard', component : DashboardComponent},    
    {path : 'campaign', component : CampaignComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}