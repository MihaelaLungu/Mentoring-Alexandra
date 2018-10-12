import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoTableComponent } from './to-do-table/to-do-table.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ToDoListPageComponent } from './to-do-list-page/to-do-list-page.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    ToDoFormComponent,
    ToDoTableComponent,
    ProfilePageComponent,
    ToDoListPageComponent,
    ProfileFormComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
