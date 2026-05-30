import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
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

@NgModule({
  declarations: [
    ShellComponent,
    SidebarComponent,
    TopbarComponent,
    HomeComponent,
    PersonnesComponent,
    TreeComponent,
    StoriesComponent,
    TimelineComponent,
    JeuxComponent,
    UnionsComponent,
    AdminComponent,
    ProfilComponent,
    InviterComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ShellRoutingModule],
})
export class ShellModule {}
