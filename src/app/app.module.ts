import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './sms/components/navbar/navbar.component';
import { SidebarComponent } from './sms/components/sidebar/sidebar.component';
import { StudentMainComponent } from './sms/Students/student-main/student-main.component';
import { StudentsListComponent } from './sms/Students/students-list/students-list.component';
import { StudentInfoComponent } from './sms/Students/student-info/student-info.component';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule, MatButtonModule} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    StudentMainComponent,
    StudentsListComponent,
    StudentInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
