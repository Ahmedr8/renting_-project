import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AdminRoutingModule } from './admin-routing.module';
import { VeichuleComponent } from './veichule/veichule.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { EditVeichuleDialog } from './veichule/edit-veichule-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    VeichuleComponent,
    SidebarComponent,
    AdminComponent,
    EditVeichuleDialog
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [EditVeichuleDialog]
})
export class AdminModule { }
