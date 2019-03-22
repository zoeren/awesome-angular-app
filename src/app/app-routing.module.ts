import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwesomeCalculatorComponent } from './awesome-calculator/awesome-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: AwesomeCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
