import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule, MatInputModule, MatCardModule} from '@angular/material'
import { FormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatButtonModule, MatInputModule,FormsModule, MatCardModule]
})
export class AppRoutingModule { }
