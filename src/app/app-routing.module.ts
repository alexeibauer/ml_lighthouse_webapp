import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MlloginredirectscreenComponent } from './screens/mlloginredirectscreen/mlloginredirectscreen.component';
import { MlconectadoscreenComponent } from './screens/mlconectadoscreen/mlconectadoscreen.component';


const routes: Routes = [
  { path: '', component: MlloginredirectscreenComponent, pathMatch: 'full' },
  { path: 'conectado', component: MlconectadoscreenComponent, pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
