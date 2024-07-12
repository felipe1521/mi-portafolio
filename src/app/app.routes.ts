import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'experience', component: ExperienceComponent}
];
