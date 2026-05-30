import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FamilleRoutingModule } from './famille-routing.module';

import { FamilleLoginComponent }    from './auth/famille-login.component';
import { FamilleShellComponent }    from './shell/famille-shell.component';
import { FamilleHomeComponent }     from './pages/home/famille-home.component';
import { FamilleMembresComponent }  from './pages/membres/famille-membres.component';
import { FamilleStoriesComponent }  from './pages/stories/famille-stories.component';
import { FamilleArbreComponent }    from './pages/arbre/famille-arbre.component';
import { FamilleTimelineComponent } from './pages/timeline/famille-timeline.component';
import { FamilleProfilComponent }   from './pages/profil/famille-profil.component';
import { FamilleInviterComponent }  from './pages/inviter/famille-inviter.component';

@NgModule({
  declarations: [
    FamilleLoginComponent,
    FamilleShellComponent,
    FamilleHomeComponent,
    FamilleMembresComponent,
    FamilleStoriesComponent,
    FamilleArbreComponent,
    FamilleTimelineComponent,
    FamilleProfilComponent,
    FamilleInviterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FamilleRoutingModule,
  ],
})
export class FamilleModule {}
