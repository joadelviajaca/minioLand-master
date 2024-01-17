import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MinionsListComponent } from './minions-list/minions-list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'minions', component: MinionsListComponent}
];
