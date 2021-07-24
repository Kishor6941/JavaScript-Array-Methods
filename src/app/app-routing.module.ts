import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptArrayMethodsComponent } from './javascript-array-methods/javascript-array-methods.component';

const routes: Routes = [{
  path:'array-methods', component : JavascriptArrayMethodsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
