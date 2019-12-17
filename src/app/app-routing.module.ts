import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomeComponent} from './awesome/awesome.component';
import {AwesomeAddComponent} from './awesome-add/awesome-add.component';
import {AwesomeEditComponent} from './awesome-edit/awesome-edit.component';


const routes: Routes = [
  {
    path: '',
    component: AwesomeComponent
  },
  {
    path: 'create',
    component: AwesomeAddComponent
  },
  {
    path: 'edit',
    component: AwesomeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
