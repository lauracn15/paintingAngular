import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaintingsComponent } from './components/paintings/paintings.component'

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
path: '',
  component: PaintingsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
