import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'add-emp', component: AddComponent },
  { path: 'show-emp', component: ShowComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}