import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { AppModule } from './../app.module';
import { FileUploadComponent } from './../common/file-upload/file-upload.component';
import { UpdateComponent } from './update/update.component';
import { MaterialModule } from './../material/material.module';
import { CreateComponent } from './create/create.component';
import { BlogComponent } from './blog.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    { path: 'create', canActivate:[AuthGuard], component: CreateComponent },
    { path: '',   component: BlogComponent },
    {path:'edit/:id', pathMatch:"full", canActivate:[AuthGuard],  component:UpdateComponent}



];

@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent
    ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BlogModule { }
