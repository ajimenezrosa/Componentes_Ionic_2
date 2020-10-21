import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecksPageRoutingModule } from './checks-routing.module';

import { ChecksPage } from './checks.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecksPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChecksPage]
})
export class ChecksPageModule {}
