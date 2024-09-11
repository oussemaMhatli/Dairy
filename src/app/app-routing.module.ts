import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { DiaryComponent } from './component/diary/diary.component';
import { FormAddComponent } from './component/form-add/form-add.component';
import { FormEditComponent } from './component/form-edit/form-edit.component';
import {MainComponent} from "./component/main/main.component";



const routes: Routes = [

  {path:'',component: MainComponent },
  {path:'diary',component: DiaryComponent },
  {path:'about',component: AboutComponent },
  {path:'formAdd',component: FormAddComponent },
  {path:'formEdit/:id',component: FormEditComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
