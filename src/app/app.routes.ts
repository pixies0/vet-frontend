import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: '**', redirectTo: '' } // Redireciona qualquer rota para login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
