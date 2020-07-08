import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicSearchComponent } from './views/music-search/music-search.component';


/* /music/** */
const routes: Routes = [
  {
    path: '',
    component: MusicSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicSearchRoutingModule { }
