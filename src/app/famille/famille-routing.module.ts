import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { clientGuard } from '../core/client.guard';
import { FamilleLoginComponent } from './auth/famille-login.component';
import { FamilleShellComponent } from './shell/famille-shell.component';
import { FamilleHomeComponent } from './pages/home/famille-home.component';
import { FamilleMembresComponent } from './pages/membres/famille-membres.component';
import { FamilleStoriesComponent } from './pages/stories/famille-stories.component';
import { FamilleArbreComponent } from './pages/arbre/famille-arbre.component';
import { FamilleTimelineComponent } from './pages/timeline/famille-timeline.component';
import { FamilleProfilComponent }   from './pages/profil/famille-profil.component';

const routes: Routes = [
  { path: 'login', component: FamilleLoginComponent },
  {
    path: '',
    component: FamilleShellComponent,
    canActivate: [clientGuard],
    children: [
      { path: '',        redirectTo: 'home', pathMatch: 'full' },
      { path: 'home',     component: FamilleHomeComponent     },
      { path: 'membres',  component: FamilleMembresComponent  },
      { path: 'stories',  component: FamilleStoriesComponent  },
      { path: 'arbre',    component: FamilleArbreComponent    },
      { path: 'timeline', component: FamilleTimelineComponent },
      { path: 'profil',   component: FamilleProfilComponent   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilleRoutingModule {}
