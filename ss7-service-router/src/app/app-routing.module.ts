import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {DistionaryPageComponent} from './distionary/distionary-page/distionary-page.component';
import {DistionaryDetailComponent} from './distionary/distionary-detail/distionary-detail.component';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent
  },
  {
    path: 'word',
    component: DistionaryPageComponent
  },
  {
    path: 'word/detail/:id',
    component: DistionaryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
