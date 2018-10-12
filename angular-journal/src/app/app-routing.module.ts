import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ToDoListPageComponent } from './to-do-list-page/to-do-list-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: AppComponent},
    { path: 'profile', component: ProfilePageComponent },
    { path: 'to-do-list', component: ToDoListPageComponent },
    { path: 'home', component: HomePageComponent }
];

@NgModule({
     imports: [
         RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
})

export class AppRoutingModule { }
