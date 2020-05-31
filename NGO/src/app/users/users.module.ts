import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule
  ]
})
export class UsersModule { }
