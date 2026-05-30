import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import { HomeComponent } from '../pages/home/home.component';
import { PersonnesComponent } from '../pages/personnes/personnes.component';
import { TreeComponent } from '../pages/tree/tree.component';
import { StoriesComponent } from '../pages/stories/stories.component';
import { TimelineComponent } from '../pages/timeline/timeline.component';
import { JeuxComponent } from '../pages/jeux/jeux.component';
import { UnionsComponent } from '../pages/unions/unions.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { ProfilComponent } from '../pages/profil/profil.component';
import { InviterComponent } from '../pages/inviter/inviter.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home',      component: HomeComponent },
      { path: 'personnes', component: PersonnesComponent },
      { path: 'tree',      component: TreeComponent },
      { path: 'stories',   component: StoriesComponent },
      { path: 'timeline',  component: TimelineComponent },
      { path: 'jeux',      component: JeuxComponent },
      { path: 'unions',    component: UnionsComponent },
      { path: 'admin',     component: AdminComponent },
      { path: 'profil',   component: ProfilComponent },
      { path: 'inviter',  component: InviterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
